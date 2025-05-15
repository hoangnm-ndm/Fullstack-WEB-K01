import "./App.css";
import StudentList from "./components/StudentList";

const students = [
	{ id: 1, name: "Nguyen Minh Hoang", email: "hoang@gmail.com", gender: "male" },
	{ id: 2, name: "Tran Duy Dong", email: "dong@gmail.com", gender: "male" },
	{ id: 3, name: "Nguyen Hong Nhung", email: "hongnhung@gmail.com", gender: "female" },
];

function App() {
	return (
		<>
			<StudentList students={students} />
		</>
	);
}

export default App;
hnjjkxjkjsk;
