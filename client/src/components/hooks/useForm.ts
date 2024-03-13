import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  role: string;
}

interface UseFormProps {
  initialState: FormData;
  submitUrl: string;
}

interface UseFormState {
  values: FormData;
  loading: boolean;
  success?: boolean;
  error: AxiosError | null;
}

const useForm = ({ initialState, submitUrl }: UseFormProps) => {
  const history = useNavigate();
  const [state, setState] = useState<UseFormState>({
    values: initialState,
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  const resetForm = () => {
    setState((prevState) => ({
      ...prevState,
      values: initialState,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
      success: false,
    }));
    try {
      await axios.post(submitUrl, state.values);
      resetForm();
      setState((prevState) => ({
        ...prevState,
        success: true,
      }));
      console.log("Form submitted successfully");
      setTimeout(() => {
        history("/users");
      }, 1000);
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error as AxiosError,
      }));
      console.error("Form submission error:", error);
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  return { ...state, handleChange, handleSubmit, resetForm };
};

export default useForm;
