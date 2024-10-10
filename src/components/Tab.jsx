export default function Tab({children, onSelect, isSelected}) {
	
	return(
		<>
			<button className={isSelected && 'active'} onClick={onSelect}>{children}</button>
		</>
	)
}