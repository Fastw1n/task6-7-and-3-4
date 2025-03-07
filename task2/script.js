document.addEventListener("DOMContentLoaded", function () {
	// Храним текущее активное меню
	let activeMenu = null;

	// Все блоки с заголовками
	const menuItems = document.querySelectorAll(".div-lotr h1, .div-harry h1, .div-sw h1");

	menuItems.forEach(title => {
			const submenu = title.nextElementSibling; // Находим соответствующее подменю

			title.addEventListener("click", function () {
					// Если это уже активное меню — закрываем его
					if (activeMenu === submenu) {
							submenu.classList.remove("open");
							title.classList.remove("open");
							activeMenu = null;
					} else {
							// Закрываем старое меню, если оно есть
							if (activeMenu) {
									activeMenu.classList.remove("open");
									document.querySelector(".open")?.classList.remove("open");
							}
							
							// Открываем новое
							submenu.classList.add("open");
							title.classList.add("open");
							activeMenu = submenu;
					}
			});

			// Делаем заголовок доступным для фокуса
			title.setAttribute("tabindex", "0");

			// Позволяем открывать меню клавишей Enter
			title.addEventListener("keydown", function (event) {
					if (event.key === "Enter") {
							title.click(); // Симулируем клик
					}
			});
	});

	// Закрываем меню при клике вне
	document.addEventListener("click", function (event) {
			if (!event.target.closest(".div-lotr, .div-harry, .div-sw")) {
					if (activeMenu) {
							activeMenu.classList.remove("open");
							document.querySelector(".open")?.classList.remove("open");
							activeMenu = null;
					}
			}
	});

	// Закрытие меню клавишей Escape
	document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && activeMenu) {
					activeMenu.classList.remove("open");
					document.querySelector(".open")?.classList.remove("open");
					activeMenu = null;
			}
	});
});
