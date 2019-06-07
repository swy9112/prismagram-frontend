import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        const {
          data: { requestSecret }
        } = await requestSecretMutation();
        console.log(requestSecret);
        try {
          if (requestSecret) {
            toast.error(`계정이 존재하지 않습니다.계정을 만들어주세요.`);
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("메일함을 확인하세요.");
          }
        } catch (error) {
          toast.error("코드를 요청할 수 없습니다. 다시 시도하십시오.");
        }
      } else {
        toast.error("이메일을 입력하세요.");
      }
    } else if (action === "signUp") {
      if (
        username !== "" &&
        email !== "" &&
        firstName !== "" &&
        lastName !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("계정을 생성 할 수 없습니다.");
          } else {
            toast.success("계정이 생성되었습니다. 로그인 하세요.");
            setAction("logIn");
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    } else {
      toast.error("모든 입력란은 필수 입력란입니다.");
    }
  };

  return (
    <AuthPresenter
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      setAction={setAction}
      onSubmit={onSubmit}
    />
  );
};
