import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import EarCare from './screens/EarCare';
import AboutUs from './screens/Aboutus';
import HowtoUse from './screens/HowtoUse';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/earcare" element={<EarCare />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/howtouse" element={<HowtoUse />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
