import TextInput from "./components/common/TextInput";
import SelectInput from "./components/common/SelectInput";
import Button from "./components/common/Button";
import useForm from "./components/hooks/useForm";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  role: string;
}

function App() {
  const initialState: FormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    role: "",
  };

  const selectOptions = [
    { value: "author", label: "Author" },
    { value: "editor", label: "Editor" },
    { value: "subscriber", label: "Subscriber" },
    {
      value: "administrator",
      label: "Administrator",
    },
  ];

  const submitUrl = "http://localhost:8000/api/v1/create-user";

  const { values, loading, error, success, handleChange, handleSubmit } =
    useForm({ initialState, submitUrl });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 border px-3 py-2">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-bold">Create User</h1>
          <Link to="/users" className="px-3 py-1 rounded hover:text-blue-600">
            Users
          </Link>
        </div>
        {success && (
          <p className="text-green-500 mb-2">User created successfully!</p>
        )}

        <form onSubmit={handleSubmit}>
          <TextInput
            label="First Name"
            placeholder="First Name"
            value={values.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <TextInput
            label="Middle Name"
            placeholder="Middle Name"
            value={values.middleName}
            name="middleName"
            onChange={handleChange}
          />

          <TextInput
            label="Last Name"
            placeholder="Last Name"
            value={values.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <SelectInput
            label="Role"
            value={values.role}
            name="role"
            options={selectOptions.map((option) => option.value)}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleChange(e)
            }
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
          {error && <p className="text-red-500 mt-2">{error.message}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
