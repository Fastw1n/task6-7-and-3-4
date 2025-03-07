document.addEventListener("DOMContentLoaded", function () {
	let activeMenu = null;

	const menuItems = document.querySelectorAll(".div-lotr h1, .div-harry h1, .div-sw h1");

	menuItems.forEach(title => {
			const submenu = title.nextElementSibling;

			title.addEventListener("click", function () {
					if (activeMenu === submenu) {
							submenu.classList.remove("open");
							title.classList.remove("open");
							activeMenu = null;
					} else {
							if (activeMenu) {
									activeMenu.classList.remove("open");
									document.querySelector(".open")?.classList.remove("open");
							}
							submenu.classList.add("open");
							title.classList.add("open");
							activeMenu = submenu;
					}
			});


			title.setAttribute("tabindex", "0");

			// здесь я сделал зачемм то отрытие и закрытие при помощи хех Enter
			title.addEventListener("keydown", function (event) {
					if (event.key === "Enter") {
							title.click();
					}
			});
	});

	// а тут закрываем при клике по рандомной облости (пусть будет)
	document.addEventListener("click", function (event) {
			if (!event.target.closest(".div-lotr, .div-harry, .div-sw")) {
					if (activeMenu) {
							activeMenu.classList.remove("open");
							document.querySelector(".open")?.classList.remove("open");
							activeMenu = null;
					}
			}
	});

	// и Escape тоже
	document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && activeMenu) {
					activeMenu.classList.remove("open");
					document.querySelector(".open")?.classList.remove("open");
					activeMenu = null;
			}
	});
});
