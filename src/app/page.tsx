import clsx from "clsx";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";
import Slider from "@/components/Slider/Slider";


import {MapProvider} from "@/components/Map/MapProvider";
import { Map } from "../components/Map/Map";

const card_one = [
    {
        url: "/img/project/1.png",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/img/project/2.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/img/project/3.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/img/project/4.png",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/img/project/5.png",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/img/project/6.png",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/img/project/7.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/8.png",
        title: "Title 7",
        id: 7,
    }
];
const card_two = [
    {
        url: "/img/project/9.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/10.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/11.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/12.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/13.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/14.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/15.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/16.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/17.png",
        title: "Title 7",
        id: 7,
    },
];
const card_three = [
    {
        url: "/img/project/18.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/19.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/20.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/21.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/22.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/23.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/24.png",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/img/project/25.png",
        title: "Title 7",
        id: 7,
    },
];

export default function Home() {
    const apiUrl = `https://api-maps.yandex.ru/3.0/?apikey=8c33b573-4dbc-4cec-9326-f39e0f57a2a2&lang=ru_RU`;

    return (
        <main className={styles.main}>
            <section className={styles.first}>
                <div className={styles.wrapper}>
                    <div className={styles.first__description}>
                        <h1 className={styles.first__title}>
                            Увеличим<br/>
                            <span className={styles.first__title_first}>поток клиентов<br/></span>
                            <span className={styles.first__title_second}>системным подходом</span>
                        </h1>
                        <ul className={styles.first__ul}>
                            <li>Стратегия</li>
                            <li>Контент</li>
                            <li>Продвижение</li>
                        </ul>
                        <button className={styles.btn}>
                            <span>Получить консультацию</span>
                        </button>
                    </div>
                    <div className={styles.first__text}>
                        <p>
                            Usiamo il design per mettere al centro le persone e le loro scelte.
                        </p>
                        <p>
                            Realizziamo siti web, brand identity e contenuti creativi che prendono per mano i tuoi
                            clienti
                            e li portano verso di te.
                        </p>
                    </div>
                </div>
                <div className={styles.first__arrow}/>
            </section>
            <section className={styles.second}>
                <div className={styles.wrapper}>
                    <h1>О нас в цифрах</h1>
                    <div className={styles.second__items}>
                        <div className={styles.second__item}>
                            <h3>27</h3>
                            <div>
                                <p>
                                    маркетологов в<br/>
                                    <span>команде</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.second__item}>
                            <h3>4000</h3>
                            <div>
                                <p>
                                    снимаемых<br/>
                                    <span>видео</span> в<br />
                                    месяц
                                </p>
                            </div>
                        </div>
                        <div className={styles.second__item}>
                            <h3>10</h3>
                            <div>
                                <p>
                                    охватываев<br/>
                                    весь <span>Казахстан</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.second__items}>
                        <div className={styles.second__item}>
                            <h3>15000</h3>
                            <div>
                                <p>
                                    заявок<br/>
                                    <span>генерируем</span><br />
                                    каждый месяц
                                </p>
                            </div>
                        </div>
                        <div className={styles.second__item}>
                            <h3>10<span>млрд тенге</span></h3>
                            <div>
                                <p>
                                    в год <span>оборот</span><br />
                                    наших клиентов
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.third}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <div>
                            <h1>Наши услуги</h1>
                        </div>
                        <p>
                            Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                        </p>
                    </div>
                    <div className={styles.third__blocks}>
                        <div className={styles.third__items}>
                            <div className={styles.third__item}>
                                <div className={styles.third__item_header}>
                                    <div className={styles.third__item_icon}>
                                        <Image src="/img/service-icon-1.svg" alt="" width={50} height={50} />
                                    </div>
                                </div>
                                <div className={styles.third__item_body}>
                                    <h2>Таргетированная <br />
                                        реклама</h2>
                                    <p>
                                        Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.third__item}>
                                <div className={styles.third__item_header}>
                                    <div className={styles.third__item_icon}>
                                        <Image src="/img/service-icon-2.svg" alt="" width={50} height={50} />
                                    </div>
                                </div>
                                <div className={styles.third__item_body}>
                                    <h2>Разработка <br />
                                        сайтов</h2>
                                    <p>
                                        Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.third__item}>
                                <div className={styles.third__item_header}>
                                    <div className={styles.third__item_icon}>
                                        <Image src="/img/service-icon-3.svg" alt="" width={50} height={50} />
                                    </div>
                                </div>
                                <div className={styles.third__item_body}>
                                    <h2>Разработка маркетинговой <br />
                                        стратегии</h2>
                                    <p>
                                        Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.third__item}>
                                <div className={styles.third__item_header}>
                                    <div className={styles.third__item_icon}>
                                        <Image src="/img/service-icon-4.svg" alt="" width={50} height={50} />
                                    </div>
                                </div>
                                <div className={styles.third__item_body}>
                                    <h2>Интеграция <br />
                                        СRM систем</h2>
                                    <p>
                                        Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.third__big}>
                            <div className={clsx(styles.third__item, styles.third__item_big)}>
                                <div className={styles.third__item_header}>
                                    <div className={styles.third__item_icon}>
                                        <Image src="/img/service-icon-1.svg" alt="" width={50} height={50} />
                                    </div>
                                </div>
                                <div className={clsx(styles.third__item_body, styles.third__item_body_big)}>
                                    <h2>Таргетированная <br />
                                        реклама</h2>
                                    <p>
                                        Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.four}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <div>
                            <h1>Примеры<br /> наших работ</h1>
                        </div>
                        <p>
                            Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                        </p>
                    </div>
                </div>

                <Slider items={card_one} />

                <Slider items={card_two} />

                <Slider items={card_three} />
            </section>
            <section className={styles.fifth}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <div>
                            <h1>Наши<br /> клиенты</h1>
                        </div>
                        <p>
                            Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.
                        </p>
                    </div>
                    <div className={styles.fifth__items}>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/1.svg" alt="" width={151} height={60} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/2.svg" alt="" width={210} height={53} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/3.svg" alt="" width={252} height={38} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/4.svg" alt="" width={197} height={36} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/5.svg" alt="" width={174} height={38} />
                        </div>
                    </div>
                    <div className={styles.fifth__items}>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/6.svg" alt="" width={112} height={64} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/7.png" alt="" width={165} height={51} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/8.png" alt="" width={267} height={44} />
                        </div>
                        <div className={styles.fifth__item}>
                            <Image src="/img/logos/9.png" alt="" width={108} height={68} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sixth}>
                <div className={styles.wrapper}>
                    <h1>Cвязаться с нами</h1>
                    <div className={styles.sixth__content}>
                        <div className={styles.sixth__form}>
                            <form action="" className={styles.form}>
                                <input type="text" placeholder="Ваше имя" className={styles.input} />
                                <input type="text" placeholder="Ваш номер телефона" className={styles.input} />
                                <button className={styles.button}>
                                    Отправить заявку
                                </button>
                            </form>
                        </div>
                        <div className={styles.sixth__map}>
                            <div className={styles.sixth__yandex}>
                                <MapProvider apiUrl={apiUrl}>
                                    <Map />
                                </MapProvider>
                            </div>
                            <div className={styles.sixth__contacts}>
                                <div>
                                    <span>номер телефона</span>
                                    <a href="tel:+77073159972">+7 707 315 99 72</a>
                                </div>
                                <div>
                                    <span>адрес офиса</span>
                                    <p>Жандосова  200В</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
