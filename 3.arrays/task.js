

function compareArrays(arr1, arr2) {
	const copyArray = [];

	for (let element of arr1) {
		copyArray.push(element); //Делаем копию массива и переносим туда элементы массива arr1
	}
	let result;
	if (copyArray.length === arr2.length) { //Сравниваем массивы по длинне, если не равны, то выводим false
		const result = arr2.every((number, i) => number === copyArray[i]); // Сравниваем значения массивов
		return result;

	} else {
		return false;
	}

}





function getUsersNamesInAgeRange(users, gender) {

	if (users.length > 0 && (gender === "женский" || gender === "мужской")) { //проверяем, что массив не пустой, а пол указан верно

		const filtred = users.filter(user => user.gender === gender); //фильтруем массив по полу
		const ages = filtred.map(people => people.age); //получаем данные о возрасте
		const average = ages.reduce((acc, item) => acc + item, 0); //получаем сумму всех отобранных возрастов
		const result = average / filtred.length; //находим среднее значение нужных возрастов
		return result;

	} else {
		return 0;
	}
}