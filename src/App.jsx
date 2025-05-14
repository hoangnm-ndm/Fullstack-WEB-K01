import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import Button from "./components/Button";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<main>
				{/* <SideBar />
				<HomePage /> */}
				<div>
					<Button size="small" color="red">
						Click Me
					</Button>
					<Button size="medium" color="blue">
						Login
					</Button>
					<Button size="big" color="green">
						Register
					</Button>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
