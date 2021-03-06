import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  moreInfo = [
    {
      question: '"- Чи можна поїхати в Німеччину без знання німецької мови, а тільки зі знанняманглійської. І якими мають бути знання мови?"',
      answer: 'До Німеччини можна поїхати тільки зі знаннями німецької мови на базовому рівні мінімум А1. До речі, навіть якщо Ви мови не знаєте — то це не проблема — на наших курсах німецької мови за 2-3 місяці можна здобути необхідний рівень. Майже всі сім’ї володіють англійською мовою, і ви можете з ними по SKYPE розмовляти англійською. Але для того, щоб вам відкрили візу, ви маєте підтвердити володіння німецькою мовою на рівні А1 чи вище, а саме подавши актуальний сертифікат від мовного закладу, який має сертифікацію ALTE (напр. від Goethe-Institut або telc GmbH).',
    },
    {
      question: '"- Скільки часу займає оформлення документів і вибір сім`ї?"',
      answer: 'Пошук сім`ї може тривати від 1-го дня до 6 місяців: протяжність пошуку сім`ї залежить відбагатьох факторів, зокрема: бажаного міста перебування, якості підготовлених документів, вимог, які учасник пред`являє сім`ї, а також, особистих і професійних якостей кандидата. Ми, зі свого боку, робимо все можливе, щоб знайти Вам сім`ю як можна швидше. Цілком достатньо буде прийти за 4-6 місяців до бажаної дати від`їзду, в такому випадку ми точно все встигнемо вчасно оформити. Юнакам ми радимо приходити настільки заздалегідь, наскільки це тільки можливо, тому, що сім`ї в основному вибирають дівчаток і юнакам набагато складніше отримати запрошення.',
    },
    {
      question: '"- Чи можливий додатковий заробіток? "',
      answer: "За умовами програми ви не маєте права займатись іншою діяльність крім Au Pair. Потрібно створити про себе гарне враження в колі знайомих сім'ї і сусідів. Можливо запропонують бебісіттінг або прибирання або прасування. Рідко можна знайти підробіток в кафешці або на якійсь кухні. У Німеччині з цим строго і всі бояться. Сім'я теж не схвалить чорної роботи, оскільки несе відповідальність за тебе. Хоча деякі самі допомагають знайти додатковий бебісітінг.",
    },
    {
      question: '"- Чи можна знайти сім’ю самостійно, без допомоги агентства?"',
      answer: "Так, можна. В такому випадку, якщо Ви знаходите сім’ю самостійно (наприклад, через Інтернет), Ви ризикуєте прибути не до призначеного адресату та попасти в інші курйозні моменти, адже це ніким не перевірені сім'ї, які можуть зловживати вашою довірою. Наше агентство перевіряє надійність сім’ї, їх житлові умови, фінансову спроможність, стан здоров’я, чи не була сім’я притягнута до кримінальної відповідальності і т.п. Агентство допомагає тобі з документами, які необхідно подати в консульство та іншими.",
    },
    {
      question: '"- Чи можливо змінити сім’ю в разі виникнення непорозумінь?"',
      answer: "Якщо Ви не змогли вирішити ці непорозуміння з сім’єю особисто, або у вас щось не склалось (різне буває), то Ви маєте право на заміну сім’ї. Ви звертаєтесь в агентство до свого менеджера, і вам протягом 2 тижнів знаходять нову сім’ю. Весь цей час, ви проживаєте в сім’ї, або ж безкоштовне житло вам надає агентство. ВИКЛЮЧЕННЯ! Якщо перша сім’я відмовилась від Вас через порушення Вами законів країни перебування, Ви повинні будете покинути країну без права заміни сі ",
    },
    {
      question: '"- Який тип візи я отримаю і на який термін?"',
      answer: "Оскільки Ви подаєте документи в посольство по програмі Au Pair, то, відповідно, отримуєте візу “Au Pair” (Au Pair в Європі). Це означає, що в країні перебування Ви знаходитесь як учасник даної програми і можете займатися діяльністю, передбаченою умовами програми. В більшості випадків в країнах Європи візи Au Pair необхідно продовжувати. Продовження візи – це реєстрація Au Pair в місцевій службі зайнятості, наші сім'ї беруть на себе ці витрати.",
    },
    {
      question: '"- Чи зможу я подорожувати по Європі перебуваючи за кордоном по програмі AU PAIR?"',
      answer: "Так, зможете. Маючи візу 'Au Pair' Ви зможете подорожувати по всіх країнах, які входять до Шенген зони.",
    },
    {
      question: '"- Де гарантія того, що я не буду обдурений та попаду в сім‘ю як Au-Pair?"',
      answer: "Ще до від‘їзду кожен Au-Pair знайомиться з сім‘єю через фотографії, листи, телефонні дзвінки. Потім Ви отримуєте офіційне запрошення по програмі Au-Pair від сім‘ї, яке потім ми надсилаємо в Консульство. Наше агентство є акредитоване в консульстві, тому відмови у відкритті візи не може бути. Відомство у справах іноземців в країні перебування запрошує до себе сім‘ю для співбесіди, а також перевіряє житлові та інші умови життя сім‘ї. Лише після цього Вам видається відповідна віза Au-Pair для перебування саме в цій сім‘ї.",
    }
  ]
  articles = [
    {
      country: "Germany",
      img: "../../../assets/images/main-images/Germany.jpg",
      title: "Au-Pair недорога і вигідна програма - для тих, хто хоче без значних витрат виїхати в Німеччину на один рік, удосконалити німецьку мову в мовному середовищі, відвідати інші країни Європейського Союзу.Au-Pair програма дає можливість вступити і безкоштовно вчитися в найкращих ВНЗ Німеччини.",
      requirement: ["Вік 18 до 26 років.", "Тривалість перебування від 6 до 12 місяців.", "Базові знання німецької мови є обов'язковими.", "Кандидати мають бути неодруженими та без дітей."],
      responsibility: ['"Допомога в догляді за дітьми.', "Допомога в щоденній легкій домашньої роботі."],
      workTime: ["Кандидат працює 30 годин на тиждень (макс. 6 годин на день).", "Кандидат має право на 1,5 вільного від роботи дня на тиждень.", "Кандидат також може бути задіяний як няня 2-3 вечори на тиждень.", "Кандидат має право на 4 тижні оплачуваної відпустки за 1 рік перебування."],
      detail: ["Кандидат отримує кишенькові гроші від 260 євро раз на місяць.", "Вартість страхування оплачує сім'я, яка приймає.", "Сім'я оплачує курси німецької мови у розмірі до 50 євро на місяць.", "Сім'я оплачує проїзд у міському транспорті до місця проведення мовних курсів та назад.", "Кандидат отримує посвідчення 'Au-pair Ausweis'."],
      price: ["Послуги агентства: 5000 грн.- 1-й внесок: 3000 грн. (метод. допомога в оформленні документів), після оплати яких видаються бланкидокументів, інструкції щодо їх заповнення і т.д .;- 2-й внесок: 2000 грн. (консультаційно-пошукові послуги), які Ви оплачуєте до підписання контракту з сім'єю, перед подачею документів в посольство для отримання візи.", "Проїзд до Німеччини - від 1500 грн. до 2000 грн."],
      link:false
    },
    {
      country: "Austria",
      img: "../../../assets/images/main-images/Austria.png",
      title: "Програма AU-PAIR в Австрії – це ефективний спосіб удосконалити німецьку мову, познайомитися з життям, національними особливостями, культурою Австрії і можливість вступити до іноземного ВУЗУ по закінченню програми.",
      requirement: ["Вік 18 до 26 років.", "Тривалість перебування 12 місяців.", "Раніше вивчення німецької мови мінімум протягом 6-ти місяців.", "Ви не були в статусі Au Pair в Австрії більше 1 року протягом минулих 5 років.", "Кандидати мають бути неодруженими та без дітей."],
      responsibility: ["Допомога в догляді за дітьми.", "Допомога в щоденній легкій домашньої роботі."],
      workTime: ["Кандидат працює 19 годин на тиждень.", "Додатково 3 вечори на тиждень догляд за дітьми.", "Кандидат має право на 1,5 вільного від роботи дня на тиждень.", "Кандидат має право на 25 днів (5 тижнів) оплачуваної відпустки за 1 рік перебування."],
      detail: ["Au-pair отримує кишенькові гроші 6235.80 євро в рік (519.65 євро в місяць).", "Вартість страхування від 33 євро в місяць сплачує Au-pair.", "Сім'я оплачує першу половину курсу німецької мови."],
      price: ["Послуги агентства: 5000 грн.- 1-й внесок: 3000 грн. (метод. допомога в оформленні документів), після оплати яких видаються бланки документів, інструкції щодо їх заповнення і т.д .- 2-й внесок: 2000 грн. (консультаційно-пошукові послуги), які Ви оплачуєте до підписання контракту з сім'єю, перед подачею документів в посольство для отримання візи", "Переклад документів (свідоцтво про народження, довідка про несудимість, довідка з місця проживання) - від 800 грн. до 1500 грн.", "Дозвіл на проживання (Aufenthaltstitel) в якості Au-pair в Австрії - 150 Euro.", "Проїзд до Австрії - від 1500 грн. до 2000 грн."],
      link:false
    },
    {
      country: "German courses",
      img: "../../../assets/images/main-images/curse.jpg",
      title: "Останнім часом вивчення іноземних мов стає все більш популярним. І не дивно, адже кращої методики, ніж на курсах, напевно не існує. Курси пропонують програми з вивчення іноземної мови різної інтенсивності, тривалості та спеціалізації.",
      preference: ['Студенти починають говорити німецькою з першого заняття', 'Заняття з носієм мови', 'Представництва в 15-ти містах. Можливість продовжити навчання в іншому місті', 'Можливість подорожувати. Надання знижки від партнерів до 20% на подорожі в будь-яку країну світу', 'Школа з комфортними аудиторіями в ценрі міста (близько до зупинок)', 'Навчання за кордоном. Вища освіта та мовні курси у німецькомовніих країнах', 'Підготовка до здачі ЗНО з німецької мови', 'Sprachclub з носієм мови', 'Групи для діток від 6 років.'],
      link:true
    },
    {
      country: "Work and internships in Germany!",
      img: "../../../assets/images/main-images/work.jpg",
      title: "Робота для студентів і аспірантів в Німеччині на літні або зимові канікули: Сільське господарство, сфера обслуговування, готельно-ресторанний бізнес, виробництво!",
      preference: ['Заробляй гроші', 'Практикуй німецьку мову', 'Пізнавай нову культуру', 'Знайомся з цікавими людьми', 'Мандруй Європою', 'Набувай досвіду'],
      link:false
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }
}
