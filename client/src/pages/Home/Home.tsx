import React, {useState, useMemo, useCallback} from 'react'

const Home: React.FC = () => {

	const [counter, setCounter] = useState<number>(0)
	const num = 5


	const set = useCallback(() => {
		setCounter(prev => prev + 1)
	}, [])

	const getNum = useCallback((rex: number) => {
		console.log("heelllo")
		return rex + 5
	}, [])

	const data = useMemo(() => getNum(num), [])

	console.log("render parent")
	return (
		<div>
			{counter}
			<SomeComp set={set}/>
		</div>
	)
}

export default Home

interface some {
	set: () => void
}

const SomeComp: React.FC<some> = React.memo(({set}) => {
	console.log("render child")
	return <div onClick={set}>Add counter</div>
})