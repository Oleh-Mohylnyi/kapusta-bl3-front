# kapusta-bl3-front

1. Клонируете себе dev(main) :
	git clone https://ccылка_на_репозиторий
2. Переходите в ветку dev(main). 
	git checkout dev(main)
Забираете последние изменения в ветке dev(main). 
	git pull origin dev(main)
Потом создаете свою ветку находясь в ветке dev(main), с названием своей задачи:
	git checkout -b name_your_branch
3. Работаете только в своей ветке, все изменения пушите ТОЛЬКО в нее:
	git add .
	git commit -m “init name_your_branch”
	git push origin name_your_branch
4. Когда полностью завершили работу в своей ветке и хотите добавить эти изменения в общий проект:
4.1. Переходите в ветку dev(main) 
		git checkout dev(main)
4.2. Пулите все изменения которые внесли другие
		git pull origin dev(main)
4.3. Переходим в свою ветку:
		git checkout name_your_branch
5. Мерджите dev(main) в свою ветку, разрешаешь конфликты которых то и быть не должно на самом деле:
	git merge dev(main)
Если есть конфликты, открываем свой редактор кода и решаем возникшие конфликты (при сложностях обращаемся к team lead’у).
	git add .
	git commit -m “пишем название конкретной задачи которую сделали”
6. Пушите свою ветку на удаленку:
	git push origin name_your_branch
7. Создаете pull request на слитие с dev(main) на гитхабе
