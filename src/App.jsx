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
					<Button size="big" variant="primary">
						Nut bam chinh tren web
					</Button>
					<Button size="medium" variant="secondary">
						Secondary
					</Button>
					<Button size="big" variant="warning">
						Canh bao
					</Button>

					<Button size="small" variant="success">
						Login
					</Button>

					<Button size={"small"} variant={"danger"}>
						Delete
					</Button>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
