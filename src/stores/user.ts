import { ref } from "vue";
import { defineStore } from "pinia";
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { CallbackTypes } from "vue3-google-login";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase-init";

axios.defaults.baseURL = "http://localhost:4001/";

export const useUserStore = defineStore(
  "user",
  () => {
    const sub = ref("");
    const email = ref("");
    const picture = ref("");
    const firstName = ref("");
    const lastName = ref("");

    async function checkIfUserExists(id: string) {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    }

    async function saveUserDetails(res: AxiosResponse<any, any>) {
      try {
        await setDoc(doc(db, "users", res.data.sub), {
          sub: res.data.sub,
          email: res.data.email,
          picture: res.data.picture,
          firstName: res.data.given_name,
          lastName: res.data.family_name,
        });
      } catch (e) {
        console.log(e);
      }
    }

    async function getUserDetailsFromGoogle(
      data: CallbackTypes.CredentialPopupResponse
    ) {
      try {
        const res = await axios.post("api/google-login", {
          token: data.credential,
        });

        const useExists = await checkIfUserExists(res.data.sub);
        if (!useExists) await saveUserDetails(res);

        sub.value = res.data.sub;
        email.value = res.data.email;
        picture.value = res.data.picture;
        firstName.value = res.data.given_name;
        lastName.value = res.data.family_name;
      } catch (e) {
        console.log(e);
      }
    }

    function logout() {
      sub.value = "";
      email.value = "";
      picture.value = "";
      lastName.value = "";
      firstName.value = "";
    }

    return {
      logout,
      getUserDetailsFromGoogle,
      sub,
      email,
      picture,
      firstName,
      lastName,
    };
  },
  {
    persist: true,
  }
);
