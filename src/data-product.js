import cheeseStick from './img/data-img/cheese-stick.jpg';
import potatoDranik from './img/data-img/potato-dranik.jpg';
import medovik from './img/data-img/medovik.jpg';
import konvertiki from './img/data-img/konvertiki.jpg';
import hotButerbrod from './img/data-img/hot-buterbrod.jpg';
import makarony from './img/data-img/makarony.jpg';
import xachapyri from './img/data-img/xachapyri.jpg';
import plov from './img/data-img/plov.jpg';
import donut from './img/data-img/donut.jpg';
import fries from './img/data-img/fries.jpg';
import varenik from './img/data-img/vareniki.jpg';
import salatEzhik from './img/data-img/salat-ezhik.jpg';
import chips from './img/data-img/chips.jpg';
import potatoPirozhki from './img/data-img/patato-pirozhki.jpg';
import bananaFreeze from './img/data-img/banana-freeze.jpg';
import korzhiki from './img/data-img/korzhiki.jpg';
import coffe from './img/data-img/coffe.jpg';
import bananaOladi from './img/data-img/banana-oladi.jpg';
import bounty from './img/data-img/bounty.jpg';




const product = [
	{
		img: cheeseStick,
		tags: ['Сыр', 'Яйца', 'Мука', 'Масло'],
		name: 'Домашние сырные палочки',
		recipe: [{'Сыр твердый': '300 г'}, {'Яйцо': '1 шт.'}, {'Мука': '30 г'}, {'Масло растительное': '70 мл'}],
		steps: ['Сыр натереть на мелкой терке, добавить муку, яйцо. Перемешать. Сформировать сырные палочки.','Обжарить их в растительном масле до золотистого цвета.']
	},
	{
		img: potatoDranik,
		tags: ['Картошка', 'Яйца', 'Перец молотый', 'Масло'],
		name: 'Картофельные драники',
		recipe: [{'Картофель': '11 шт.'}, {'Яйца': '2 шт.'}, {'Соль': 'по вкусу'}, {'Перец молотый': 'по вкусу'}, {'Масло растительное': 'для жарки'}],
		steps: ['Картофель очищаем и натираем на крупной терке, сразу выкладываем на сито или дуршлаг. Отжимаем картофельный сок.', 'Добавляем яйца, соль, перец.', 'Жарим картофельные драники на среднем огне в достаточном количестве растительного масла до румяности с обеих сторон.', 'Подаем картофельные драники со сметаной или с яблочным пюре.']
	},
	{
		img: medovik,
		tags: ['Яйца', 'Сахар', 'Мёд', 'Сода', 'Мука '],
		name: 'Торт "Медовик" за 15 минут',
		recipe: [{'Яйца': '2 шт.'}, {'Сахар': '3 ст. л.'}, {'Мёд жидкий': '3 ст. л.'}, {'Сода пищевая': '1 дес. ложка'}, {'Мука': '1,5-2 стакана'}],
		steps: ['Начнём с приготовления теста. Смешиваем яйца с сахаром. Взбиваем с помощью миксера до светлой воздушной массы. Добавляем жидкий мед, перемешиваем.', 'В просеянную муку добавляем соду.', 'Добавляем муку в яично-медовую массу, перемешиваем ложкой до однородности - и тесто готово.', 'Выливаем тесто в форму, покрытую пергаментом. Выпекаем в разогретой духовке при температуре 180 градусов 15-20 минут.', 'Пока печется медовик, готовим сметанный крем: взбиваем сметану и сахарную пудру.', 'Медовый бисквит немного остужаем и теплым разрезаем на 3 коржа.', 'Промазываем сметанным кремом коржи и бока медового торта.', 'Торт "Медовик" со сметанным кремом обсыпаем крошкой. Даем пропитаться торту хотя бы 2-3 часа!']
	},
	{
		img: konvertiki,
		tags: ['Яйца', 'Ветчина', 'Сыр', 'Масло'],
		name: 'Яичные конвертики с сыром и ветчиной',
		recipe: [{'Яйца': '4 шт.'}, {'Ветчина': '130 г'}, {'Сыр твёрдый': '100 г'}, {'Масло растительное': '1-2 ч. ложки'}],
		steps: ['Натрите ветчину и сыр на мелкой тёрке. В отдельную ёмкость разбейте яйца и слегка взбейте вилкой, чтобы белки и желтки смешались. Для удобства дальнейшего приготовления можно взбивать и обжаривать по одному яйцу за раз, но тогда блинчики получатся чуть более толстыми.', 'Разогрейте сковороду на среднем огне и смажьте растительным маслом. Влейте порцию взбитых яиц и распределите по сковороде, чтобы получился тонкий яичный блинчик. Жарьте блинчик примерно 1-2 минуты, пока яичная масса не "схватится"', 'Затем переверните яичный блинчик на другую сторону. В центр блинчика выложите немного ветчины и натёртого сыра. У меня получается 5 тонких или 4 толстых блинчика, поэтому начинку я делю соответственно на 4-5 частей и распределяю между блинчиками.', 'Сверните яичный блинчик с начинкой конвертиком. Для этого сперва подверните свободные края блинчика слева и справа от начинки и сложите по направлению к центру. Прижмите края блинчика лопаткой на 10-15 секунд, чтобы зафиксировать их в таком положении.', 'Затем таким же образом подверните верхний и нижний края блинчика. Слегка прижимая лопаткой, обжарьте получившийся конвертик ещё 20-30 секунд.', 'Затем переверните яичный конвертик и обжарьте ещё 20-30 секунд с другой стороны. Повторите процесс с оставшейся яичной массой и начинкой.', 'Аппетитные яичные конвертики с сыром и ветчиной готовы.']
	},
	{
		img: hotButerbrod,
		tags: ['Хлеб', 'Колбаса', 'Помидор', 'Сыр', 'Укроп', 'Майонез'],
		name: 'Горячие бутерброды (мини-пиццы)',
		recipe: [{'Хлеб': '6-8 ломтиков'}, {'Колбаса': '150 г'}, {'Помидор': '1 шт.'}, {'Сыр': '100 г'}, {'Укроп': '1 пучок'}, {'Майонез': '2 ст. ложки'}],
		steps: ['Помидор мелко нарезаем', 'Мелко нарезаем колбаску двух видов - вареную и копченую.', 'Сыр натираем на мелкой терке.', 'Мелко нарезаем зелень.', 'Соединяем нарезанные продукты, добавляем майонез', 'Тщательно перемешиваем начинку для бутербродов.', 'Батон нарезаем ломтиками.', 'Выкладываем начинку (по 1-2 ложки) на ломтики хлеба. Ставим мини-пиццы из хлеба с колбасой, помидорами и сыром в разогретую духовку на 6-7 минут.','Горячие бутерброды готовы. Приятного аппетита!']
	},
	{
		img: makarony,
		tags: ['Макароны', 'Помидор', 'Лук', 'Чеснок', 'Масло'],
		name: 'Макароны, тушенные в сковороде',
		recipe: [{'Макароны': '200 г'}, {'Помидор': '1 шт.'}, {'Лук': '1 шт.'}, {'Чеснок': '3 зубка'}, {'Специи и соль': 'по вкусу'}, {'Масло растительное': '40 мл'}, {'Вода': '250 мл'}, {'Зелень свежая': '2-3 веточки'}],
		steps: ['Подготавливаем нужные ингредиенты. Также берем вместительную глубокую сковороду. Репчатый лук и чесночные зубчики очищаем, помидоры и свежую зелень промываем и обсушиваем.', 'Лук мелко шинкуем. Отправляем луковую нарезку в разогретое растительное масло.', 'Мелкими кубиками нарезаем помидор (при желании можно предварительно снять кожицу с помидора, опустив его в кипяток на пару минут). Измельчаем чеснок. Добавляем чеснок и помидор на сковороду к луку. Обжариваем овощи, периодически перемешивая.', 'К обжаренным овощам всыпаем макаронные изделия.', 'Макароны с помидорами, луком и чесноком перемешиваем, приправляем по вкусу солью и любимыми специями.', 'Кипятим воду и заливаем водой макароны с овощами.', 'Тушим макароны в сковороде, под крышкой, до готовности. Если вода выкипела, а макароны еще не готовы, то подливаем еще немного горячей кипяченой воды.', 'Готовое блюдо из макарон с овощами при подаче присыпаем нарезанной свежей зеленью.']
	},
	{
		img: xachapyri,
		tags: ['Сыр', 'Лук', 'Сметана', 'Яйца', 'Мука', 'Масло'],
		name: 'Ленивые хачапури (сырные лепешки)',
		recipe: [{'Сыр': '200 г'}, {'Лук': '2 шт.'}, {'Сметана': '200 г'}, {'Яйца': '2 шт.'}, {'Мука': '4-5 ст. л.'}],
		steps: ['Сыр натрите на терке.', 'Зеленый лук мелко порубите.', 'В миску, где находится натертый сыр, разбейте два яйца, добавьте сметану и зеленый лук. Хорошо перемешайте.', 'Добавьте соду, соль и хорошенько все перемешайте.Частями добавляйте муку и вымешивайте тесто. В общей сложности у меня ушло 5 столовых ложек муки с горкой.', 'На разогретую сковороду с растительным маслом выложите сырное тесто, разровняйте его.', 'Выпекайте сырную лепешку на сковороде на среднем огне в течение 4-5 минут с одной стороны и буквально пару минут с другой.']
	},
	{
		img: plov,
		tags: ['Рис', 'Мясо', 'Морковь', 'Лук', 'Соус', 'Чеснок', 'Масло'],
		name: 'Быстрый плов',
		recipe: [{'Рис': '350 г'}, {'Мясо': '350 г'}, {'Морковь': '2-3 шт.'}, {'Лук': '2 шт.'}, {'Соус': '30 мл'}, {'Чеснок': '2 зубчика'}, {'Масло растительное': '75 мл'}, {'Соль': 'по вкусу'}],
		steps: ['Рис, предварительно вымыв 5 раз, заливаем кипяченной водой минимум на 3 часа. Мясо режем кубиками среднего размера. Морковь обязательно нарезаем соломкой. Очищаем два зубчика чеснока и приступаем к приготовлению.', 'Берем сковороду с плотно прилегающей крышкой. Наливаем в нее немного масла из нашего стаканчика. И обжариваем мясо под крышкой до получения золотистой корочки. Обжариваем мясо на сильном огне 5-6 минут. Когда мы видим, что золотистая корочка образуется, можно мясо подсолить и поперчить.', 'Тем временем ставим воду для закипания. Воды нужно закипятить примерно полторы кружки от той, которую мы использовали для замера наших компонентов.', 'Когда мы видим золотистую корочку на кубиках мяса, добавляем растительное масло из нашего стаканчика и выкладываем к мясу порезанный лук.', 'Хорошо перемешиваем, накрываем крышкой и жарим пару минут.', 'Через пару минут открываем крышку, перемешиваем морковь. Вливаем остаток растительного масла из нашего стаканчика и добавляем промытый после отстаивания рис.', 'Рис начнет впитывать влагу. И поднимая крышку, периодически аккуратно помешивая, вы увидите, как впитывается жидкость.', 'Через 8-10 минут вся жидкость впитается.', ' Аккуратно в последний раз перемешать плов. Плотно накрыть крышкой и оставить быстрый плов на сковороде на 20 минут настояться. Настоявшийся плов будет еще вкуснее.']
	},
	{
		img: donut,
		tags: ['Молоко', 'Дрожжи', 'Масло', 'Мука', 'Пудра'],
		name: 'Пончики в ложке (без раскатывания теста)',
		recipe: [{'Молоко': '400 мл'}, {'Дрожжи прессованные': '25 г'}, {'Сахар': '3 ст. л.'}, {'Соль': '0,5 ч. л'}, {'Мука': '300 г'}, {'Масло растительное': '450 мл'}, {'Пудра сахарная': '2 ст. л.'},],
		steps: ['Подогреваем молоко до 35-37 градусов и растворяем в нем сахар, соль, дрожжи. Добавляем просеянную муку и замешиваем тесто, которое должно иметь консистенцию сметаны. Оставляем дрожжевое тесто в теплом месте на 1,5 часа, чтобы оно увеличилось в объеме в 2 раза.', 'Хорошо разогреваем растительное масло для жарки пончиков. Тесто выкладываем в специальную ложку, предварительно разогретую в масле.', 'Опускаем ложку с тестом в раскаленное масло. Когда пончик в ложке начинает золотиться, он сам отстает от ложки и всплывает на поверхность масла. Готовые пончики выкладываем на бумажное полотенце для удаления лишнего жира.', 'По желанию посыпаем пончики сахарной пудрой.']
	},
	{
		img: fries,
		tags: ['Картошка', 'Масло'],
		name: 'Картофель фри в домашних условиях',
		recipe: [{'Картофель': '4 шт.'}, {'Масло растительное': '1 л'}, {'Соль': 'по вкусу'}],
		steps: ['Картофель чистим и промываем. Нарезаем брусочками одинакового размера.', 'Чтобы картофель был хрустящим, помещаем его в дуршлаг и промываем под струей холодной воды, чтобы удалить крахмал.', 'В кастрюлю вливаем растительное масло и разогреваем до 180-200 градусов. Постепенно небольшими порциями выкладываем картофель в масло. Масло очень горячее, поэтому будьте очень осторожны, чтобы не обжечься.', 'Жарим картофель фри до золотистой корочки примерно 7-10 минут.', 'Перекладываем картофель в миску и солим. Чтобы удалить лишний жир, выкладываем картофель на бумажную салфетку.','Домашний картофель фри готов. Подавать картофель фри лучше всего с кетчупом. Приятного аппетита!']
	},
	{
		img: varenik,
		tags: ['Творог', 'Яйца', 'Сахар', 'Масло', 'Сметана'],
		name: 'Ленивые вареники (за 10 минут)',
		recipe: [{'Творог': '200 г'}, {'Яйцо куриное': '1 шт.'}, {'Мука пшеничная': '5-6 ст. ложек'}, {'Соль': '1/3 ч. ложки'}, {'Сахар': '1 ст. ложка'}, {'Масло сливочное': '20 г'}, {'Сметана': 'по вкусу'},],
		steps: ['Поставить на огонь 2 л воды. В миску поместить творог. Размять.', 'Добавить к творогу яйцо. Добавить соль (0,3 ч. ложки) и сахар. Тщательно перемешать.', 'Добавить муку. Замесить творожное тесто. Скатать колбаску.', 'Нарезать творожное тесто небольшими кусочками.', 'Вода вскипела. Посолить воду (1 ч. ложка). В кипящую воду выложить ленивые вареники. Как только они всплывут, варить на среднем огне 2 минуты.', 'Шумовкой достать ленивые вареники, выложить на тарелку, смазать сливочным маслом. Подавать ленивые вареники со сметаной. Приятного аппетита!']
	},
	{
		img: salatEzhik,
		tags: ['Колбаса', 'Сыр', 'Кукуруза', 'Яйца', 'Чеснок', 'Майонез '],
		name: 'Салат "Ёжик"',
		recipe: [{'Колбаса копченая': '100 г'}, {'Сыр твердый': '100 г'}, {'Кукуруза консервированная': '140 г'}, {'Яйца вареные': '3 шт.'}, {'Чеснок': '1 зубчик'}, {'Майонез': '80 г'}],
		steps: ['Подготовить продукты. Яйца заранее сварить вкрутую (10 минут) и остудить в холодной воде.','Колбасу нарезать кубиками. Яйца нарезать кубиками. Сыр натереть на тёрке','Соединить колбасу, сыр, яйца и кукурузу (без жидкости).','Чеснок очистить и выдавить через чеснокодавилку.','Заправить салат "Ежик" майонезом и перемешать все ингредиенты.']
	},
	{
		img: chips,
		tags: ['Картошка', 'Паприка'],
		name: 'Чипсы в микроволновке',
		recipe: [{'Картофель': '2 шт.'}, {'Паприка сладкая молотая': 'по вкусу'}, {'Соль': 'по вкусу'}],
		steps: ['Картофель нарезаем тонкими ломтиками. Я буду использовать для этого овощерезку. Вы можете делать это чем угодно, даже ножом.', 'Промываем ломтики картошки в воде, чтобы избавить её от лишнего крахмала.', 'При помощи бумажного полотенца избавляем картофель от лишней влаги.', 'На тарелку кладем сухое бумажное полотенце и выкладываем на него ломтики картошки так, чтобы они не касались друг друга. Добавляем соль и сладкую паприку (или другие специи, на Ваш вкус).', 'Отправляем тарелку с картошкой в микроволновку на 2 минуты при мощности 800 ватт. Через 2 минуты переворачиваем картофельные чипсы на другую сторону и снова помещаем их на 2 минуты в микроволновую печь.']
	},
	{
		img: potatoPirozhki,
		tags: ['Картошка', 'Яйца', 'Мука', 'Сосиска', 'Масло'],
		name: 'Картофельные пирожки с сосиской',
		recipe: [{'Картофель': '10 шт.'}, {'Яйцо': '1 шт.'}, {'Мука': '3 ст. л.'}, {'Сосиска': '7 шт.'}, {'Масло растительное': '5 ст. л.'},],
		steps: ['Картофель отвариваем, разминаем в пюре. В чуть теплое картофельное пюре добавляем 1 яйцо, 3 ст. ложки с горкой муки и тщательно перемешиваем до однородной массы.', 'Для формирования пирожков смачиваем руки в воде и формируем лепешку.Вкладываем в нее сосиску, лепим пирожок.', 'Пирожки отправляем на разогретую сковороду и обжариваем с обеих сторон по 2-4 минуты.']
	},
	{
		img: bananaFreeze,
		tags: ['Банан', 'Какао'],
		name: 'Банановое мороженое с какао',
		recipe: [{'Бананы': '2 шт.'}, {'Какао-порошок': '1 ст. ложка'}],
		steps: ['Бананы для приготовления берите максимально спелые или даже переспелые, ведь такие плоды более сладкие и ароматные. Какао обязательно берите тёмное, с высоким процентом жирности, чтобы вкус был действительно шоколадным.','Бананы очистите и нарежьте тонкими ломтиками (толщина не принципиальна, но чем тоньше бананы будут нарезаны, тем быстрее они заморозятся).', 'Ломтики бананов выложите в один слой на поддоне для заморозки (в качестве поддона может выступать любая плоская тарелка или доска). Поддон для заморозки можно предварительно выстелить пергаментом или плёнкой, так замороженные бананы будет легче отделить от поверхности. Отправьте бананы в морозильную камеру на 3-4 часа или на ночь.', 'Замороженные бананы выложите в чашу кухонного комбайна. Добавьте какао.', 'Включите комбайн и измельчайте бананы до получения кремовой массы. Сперва масса будет похожа на крошку, поэтому время от времени останавливайте комбайн и с помощью лопатки соскребайте массу со стенок и дна чаши.', 'Всего спустя пару минут крошка превращается в гладкое шоколадное мороженое!', 'Готовое мороженое можно подавать сразу, а можно переложить в контейнер с плотной крышкой и отправить на хранение в морозильную камеру. Приятного аппетита!']
	},
	{
		img: korzhiki,
		tags: ['Яйца', 'Сахар', 'Мука', 'Ванильный сахар', 'Масло'],
		name: 'Коржики к чаю',
		recipe: [{'Яйца': '3 шт.'}, {'Сахар': '1 стакан'}, {'Мука': '1 стакан'}, {'Ванильный сахар': '1 ч. ложка'}, {'Масло': '1 ст. ложка'}],
		steps: ['Включить духовку. Яйца с сахаром и ванильным сахаром взбить миксером в крутую пену.','Понемногу добавлять просеянную муку и дальше взбивать миксером.','Вылить тесто на смазанный маслом противень.','Поместить в разогретую духовку и выпекать при температуре 180 градусов до румяности','Готовый корж разрезать на прямоугольные коржики.']
	},
	{
		img: coffe,
		tags: ['Кофе', 'Сахар'],
		name: 'Взбитый кофе',
		recipe: [{'Кофе растворимый': '1,5 ст. ложки'}, {'Сахар': '50 г'}, {'Вода холодная': '80 мл'}],
		steps: ['Подготовьте растворимый кофе, сахар и воду.','Кофе пересыпьте в глубокую миску или чашу для взбивания.','Залейте кофе холодной кипячёной водой.','Миксером взбейте воду с кофе в лёгкую пену, около минуты.','Всыпьте сахар.','Теперь миксером на высокой скорости взбейте кофе с водой и сахаром до стабильной, крепкой и устойчивой пены. На это понадобится около 3 минут.','Разложите кофейную пену в креманки или стаканы и подайте к столу.']
	},
	{
		img: bananaOladi,
		tags: ['Банан', 'Молоко', 'Яйца', 'Мука', 'Масло'],
		name: 'Банановые оладьи (без сахара)',
		recipe: [{'Бананы': '4 шт.'}, {'Молоко': '0,5 стакана'}, {'Яйца': '1 шт.'}, {'Мука': '1 стакан'}, {'Соль': '1 щепотка'}, {'Масло растительное': 'для жарки'}],
		steps: ['В чашу блендера нарезаем 2 банана. Добавляем к бананам одно яйцо и щепотку соли. Взбиваем до состояния однородного пюре и выкладываем банановое пюре в большую миску.', 'В чашу блендера нарезаем еще 2 банана. Добавляем полстакана молока.','Снова взбиваем всё до однородности и выкладываем в ту же миску. Перемешиваем. Если блендер позволяет, то можно загрузить в него сразу четыре банана, яйцо, соль, молоко и взбить всё сразу.','Добавляем в миску стакан муки. Всё хорошо перемешиваем.','В сковороде разогреваем растительное масло. На тарелке рядом раскладываем салфетки.','Выкладываем на сковороду по одной столовой ложке теста и жарим банановые оладьи на среднем огне до золотистости. Если в тесте не хватает муки, добавляйте её до тех пор, пока оладьи не будут уверенно держать форму и нормально переворачиваться после обжарки первой стороны.','После обжарки выкладываем банановые оладьи на салфетки и промакиваем от лишнего масла обе стороны.']
	},
	{
		img: bounty,
		tags: ['Кокосовая стружка', 'Молоко сгущенное', 'Шоколад молочный'],
		name: 'Конфеты "Баунти"',
		recipe: [{'Кокосовая стружка': '300 г'}, {'Молоко сгущенное': '220 г'}, {'Шоколад молочный': '200 г'}],
		steps: ['Кокосовую стружку смешиваем со сгущенным молоком, добавляя сгущенку постепенно.', 'Должна получиться достаточно густая масса, которая не рассыпается и не растекается, держит форму.',  'Формируем конфеты, я их делаю в форме батончиков, но можно и круглые, - на Ваш вкус. Заготовки выкладываем на поверхность, застеленную пергаментной бумагой или пищевой пленкой, и отправляем в морозилку на 20-30 минут.', 'Шоколад растапливаем на водяной бане или в микроволновке (отправляем на 15-20 секунд, перемешиваем, снова в микроволновку... и так до полного растворения). Должна получиться глянцевая глазурь.','При помощи вилок окунаем "кокосовые" заготовки в шоколад и снова выкладываем на пергамент. Убираем в холодильник или в морозилку, чтобы шоколад застыл.']
	},
]

export default product;