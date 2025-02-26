function findHousing(housingToFind, housingList)
{
		let i = 0

		while (i < housingList.length) {
  			if (housingList[i] === housingToFind) {
        	return [i + 1, housingList[i]]
        }
     		i++
   	 }
     return null
}
