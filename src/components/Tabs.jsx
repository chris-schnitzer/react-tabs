import { useState } from 'react';
import Tab from './Tab.jsx';

export default function Tabs() {
	const data = {
		one: {
			content: "Tab one content"
		},
		two: {
			content: "Tab two content"
		},
		three: {
			content: "Tab three content"
		},
		four: {
			content: "Tab four content"
		}
	}

	const [selectedTab, setSelectedTab] = useState();

	function handleClick(selectedButton) {
		setSelectedTab(selectedButton);
	}

	let tabContent = <p>Please select a tab.</p>;

	if(selectedTab) {
		tabContent = <p>{data[selectedTab].content}</p>
	}

	return(
		<>
			{/* IsSelected prop is only to style the active tab*/}
			<Tab isSelected={ selectedTab === 'one' } onSelect={() => handleClick('one')}>1</Tab>
			<Tab isSelected={ selectedTab === 'two' } onSelect={() => handleClick('two')}>2</Tab>
			<Tab isSelected={ selectedTab === 'three' } onSelect={() => handleClick('three')}>3</Tab>
			<Tab isSelected={ selectedTab === 'four' } onSelect={() => handleClick('four')}>4</Tab>
			{tabContent}
		</>
	)
}