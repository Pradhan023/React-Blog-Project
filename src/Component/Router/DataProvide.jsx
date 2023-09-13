import React, { useState } from 'react'
import Data from '../DataStore'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Technology from './Technology'
import Fitness from './Fitness'
import Newpage from './Newpage'
import Food from './Food'

const DataProvide = () => {
    const [data] = useState([
        {
            id: 0,
            heading: 'Deepika Padukone shares friendship day note that reads marry your best friend, tags Ranveer Singh' ,
            image: 'https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/deepika_1691339130325_1691339130658.jpg' ,
            description: 'On the occasion of Friendship Day, Deepika Padukone dedicated a special note for Ranveer Singh, where she called him her ‘best friend.',
            contentDesc: 'Deepika Padukone is celebrating Friendship Day on Sunday with a sweet note for her actor-husband Ranveer Singh. The actor shared a note on her Instagram Stories that began with, "Marry your best friend," and tagged Ranveer in it. (Also read: Ranveer Singh reveals Deepika Padukone was ‘clapping, whistling’ while watching Rocky Aur Rani Kii Prem Kahaani)',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 1,
            heading: 'Annu Kapoor says everyone has their struggles, even Mukesh Ambani: ‘Wo bhi struggler hai’' ,
            image: 'https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/Actor-Annu-Kapoor_1691331743745_1691331743934.jpeg' ,
            description: 'Actor Annu Kapoor gave an unfiltered response when asked about actors facing struggles. He said everyone in the world is struggling in some way.',
            contentDesc: 'Annu Kapoor is awaiting the release of his next film Non-Stop Dhamaal. In a recent interview with Times Now Digital, when Annu was asked about the term struggling artist, he shared that everyone is a struggler, even Mukesh Ambani. Actor Annu Kapoor will be seen next in the films Non-Stop Dhamaal and Dream Girl 2.',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 2,
            heading: 'Katrina Kaif drops romantic pictures with Vicky Kaushal from their sea-facing balcony ' ,
            image: 'https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/vicky_kaushal_katrina_kaif_1691323072024_1691323072258.jpg' ,
            description: 'After returning to Mumbai on Sunday afternoon, Katrina Kaif shared a few candid clicks from her home with husband Vicky Kaushal.',
            contentDesc: 'Katrina Kaif seems to have had a relaxing Sunday with husband Vicky Kaushal. She took to her Instagram Stories Sunday evening to share a few glimpses from their time in the balcony of their sea-facing apartment. It includes a picture of Vicky looking at the view while standing in the balcony and another showing the couple having a romantic moment which Katrina shared with a heart emoji. Katrina Kaif has shared a few pictures from her time at home on Sunday.',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id:3,
            heading: 'Sunny Deol reacts on claims of real life cross-border love stories being inspired by Gadar' ,
            image: 'https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/d2a7585a-58fa-11ec-9953-a1851a3afc25_1639144758797_1691319292857.jpg' ,
            description: 'Sunny Deol says people should let others live, in response to question about cross-border love stories in India-Pakistan. He said it was their personal matter.',
            contentDesc: 'Sunny Deol was asked if people in India and Pakistan were inspired by the cross-border love story in his 2001 film Gadar and its upcoming sequel Gadar 2. Sunny told Aaj Tak in a new interview that people should let others live, when he was asked about Seema Haider, a Pakistani national, who came to India in May with her children to live with Sachin Meena, a man she says she loves. Sunny Deol was also asked about Anju, an Indian, who reportedly tied the knot with her Pakistani Facebook friend Nasrullah. ',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 4,
            heading: 'Alia Bhatt, Ranveer Singhs bridal photoshoot for Rocky Aur Rani Kii Prem Kahaani unveiled' ,
            image: 'https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/rocky_aur_rani_kii_prem_kahaani_1691318374285_1691318374522.jpg' ,
            description: 'Manish Malhotra has designed Alia Bhatts outfit for the wedding sequence in Rocky Aur Rani Kii Prem Kahaani and shared new pics on Sunday.',
            contentDesc: 'Ranveer Singh and Alia Bhatts wedding number Kudmayi from Rocky Aur Rani Kii Prem Kahaani was recently unveiled officially. And fans of the two cannot get over their wedding looks in the film. Now Manish Malhotra has shared new stills from their ‘wedding photo shoot’ and it gives a better glimpse of their attires and jewellery. ',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 5 ,
            heading: 'New mom Ileana D Cruz is married, tied the knot with Michael Dolan in May this year: Report' ,
            image: 'https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/ileana_dcruz_boyfriend_1689566371856_1691293069791.jpg' ,
            description: 'Ileana D Cruz, who welcomed a baby boy Koa Phoenix Dolan on August 1, got married a few months ago, as per a new report. It also revealed her wedding date.',
            contentDesc: 'Ileana D Cruz gave birth to her first child, son Koa Phoenix Dolan, on August 1, and shared her baby news on August 5. Now, as per a new report by DNA, Ileana is married to Michael Dolan. The report not only revealed Ileana D Cruzs alleged husbands name, but also the actors wedding date – May 13, 2023.',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 6,
            heading: 'After Jr NTR, Janhvi Kapoor manifests working with THIS Bollywood hero' ,
            image: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/07/janhvi-Kapoor-And-Varun-Dhawan-Bawaal-Screening-8.png?impolicy=Medium_Widthonly&w=1280&h=900' ,
            description: 'Jahnvi Kapoor is currently basking on the success of Bawaal for which she paired up with Varun Dhawan. Bawaal is streaming on Amazon Prime Video.',
            contentDesc: 'Janhvi Kapoor is currently basking on the success her latest film Bawaal alongside Varun Dhawan. This film is directed by Nitesh Tiwari and is receiving mixed responses on the internet from its audiences. The talented and versatile actress has established herself as one of the most sought-after talents in Bollywood with her notable film choices. Unlike many of her contemporaries, Janhvi prefers to take on author-backed roles instead of typical Hindi film heroine characters. The actress is busy promoting the film, talking about various aspects of her character and what made her say yes to it.',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 7,
            heading: 'Gadar 2 vs OMG 2 box office clash: Sunny Deol finally speaks up' ,
            image: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Gadar-2-vs-OMG-2.jpg?impolicy=Medium_Widthonly&w=1280&h=900' ,
            description: 'Gadar 2 and OMG 2 will see the biggest clash at the box office. Sunny Deol who is headlining Gadar: The Katha Continues commented on the competition.',
            contentDesc: 'As we approach Independence Day weekend Bollywood will witness a big clash at the box office. Two of the most awaited movies are scheduled to release on the same day. Gadar 2 and OMG 2 will lock horns on 11th August 2023. Both movies have a massive fan base and it is wondered which film will perform well at the box office. After many speculations, Sunny Deol who is headlining the Gadar: The Katha Continues sequel of 2001 released Gadar has finally opened up on a clash with Akshay Kumar starrer Oh My God 2.',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 8,
            heading: 'Disha Patani turns up the heat in red HOT bikini and fans are melting' ,
            image: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/MicrosoftTeams-image-2023-08-06T143301.410.jpg?impolicy=Medium_Widthonly&w=1280&h=900' ,
            description: 'Disha Patani drops her super sexy picture wearing a red hot bikini; fans ask her to stop killing it with her hotness.',
            contentDesc: 'Disha Patani is once again setting screens on fire, and fans are calling her the hottest property in tinseltown. Disha dropped her stunning pictures and is setting the internet ablaze. Disha Patani is leaving her fans to go WOW, and we can even... Disha is a stunner, and she knows it, and these pictures are proof she is a born slayer. ',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 9 ,
            heading: 'Urfi Javed gets bullied by a gang of boys on a flight while travelling to Goa,pictures go VIRAL' ,
            image: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/07/MicrosoftTeams-image-2023-07-21T181935.636.jpg?impolicy=Medium_Widthonly&w=1280&h=900' ,
            description: 'Urfi Javed travels to Goa in economy class and gets bullied by the gang of boys on the flight and these pictures will leave you stunned.',
            contentDesc: 'Urfi Javed was recently photographed in a completely different avatar at the Mumbai airport. Urfi even displayed a placard to draw attention to Manipur violence. She was papped at the airport in a coloured her hair in a pinkish shade that left everyone amazed. Urfi was seen travelling as she was heading for a quick vacation in Goa but this was the first time she travelled in economy class, and what happened to her is very disturbing as she had to face the unworthy behaviour of a few passengers towards her.',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 10,
            heading: 'Karan Johar to direct Suhana Khan in her second film, it’s going to be an out an out romantic film? ' ,
            image: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/MicrosoftTeams-image-2023-08-05T170021.362.jpg?impolicy=Medium_Widthonly&w=1280&h=900' ,
            description: 'Suhana Khan is all set for her second film helmed by Karan Johar, and is it going to be her first theatrical release? Read the exclusive scoop inside.',
            contentDesc: 'After the massive success of Rocky Aur Rani Kii Prem Kahaani, Karan Johar will don the directors heart one more time, and this time its going to be super special and for a very special actress, to whom Karan dreamed of directing all his life, and she is none other than Suhana Khan. Suhana is superstar Shah Rukh Khans daughter, but she will always be the first daughter of Karan Johar, and he is his biggest cheerleader. Suhana, who is going to make her debut with Zoya Akhtars The Archies, dropped the first look of Suhana as Veronica Lodge got the biggest cheerleader in Karan Johar, and he dropped the most heartfelt message for her and mentioned how excited he is. "Omg! Best morning! The kids look great!!! Suhana so excited',
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id:11 ,
            heading: 'Jailer: K pop band BTS grooving to Tamannaah Bhatias Kaavaalaa will charge you up on a boring Thursday' ,
            image: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Jailer.png?impolicy=Medium_Widthonly&w=1280&h=900' ,
            description: 'RM, Jungkook, Suga, J-Hope, V, Jin, Jimin dancing to Tamannaah Bhatias Kaavaalaa is the best thing to see on the internet.',
            contentDesc: "Who isn't hooked to Kaavaalaa yet? This song from upcoming film Jailer starring Tamannaah Bhatia and Rajinikanth has become a rage. The actress has shown off her best moves and the music is so peppy that will will make you groove instantly. Well, while everyone's quite busy making reels and videos and catching onto the Kaavaalaa fever, Korean boy ban BTS too seems hooked to the song. Well, not literally, but here's a video that has the septet dancing to the tunes of Kaavaalaa and it is simply perfect.",
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id:12 ,
            heading: "Disha Patani Shamed For Giving A Good Display Of Her B**bs In A Cleav*ge Hugging Dress",
            image:  "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/disha-patanis-glittery-nde-dress-revealing-her-navel-bbs-in-a-cleavage-hugging-string-tied-top-shamed-by-netizens-001.jpg",
            description: "Disha Patani was spotted in a glittery outfit revealing her curvaceous figure which did not go down too well with the internet who shamed her dressing.",
            contentDesc: "Disha Patani has had an interesting journey from being Tiger Shroff’s muse to becoming a fashion icon. She is known for her bold and s*xy looks and has often been criticized for her revealing outfits. Still the diva has never shied away from her own personal style, and she has inspired a legion of fans with her confidence and self-assurance.",
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 13,
            heading: 'Ektaa R Kapoor Prefers Experimenting With Different Types Of Films: “I Don’t Like To Stick To Genres”' ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/ektaa-r-kapoor-says-she-doesnt-like-to-stick-to-genres-in-films-001.jpg' ,
            description: "Ektaa R Kapoor, who is awaiting the release of 'Dream Girl 2', says she doesn't like to stick to any particular genre in films.",
            contentDesc: "Ektaa R Kapoor, who has given some of India’s most iconic television shows and films, and is awaiting the release of her upcoming production, ‘Dream Girl 2’, said that she doesn’t like to stick to any particular genre in films as she has television for that.Ektaa is all set to captivate the audience with a diverse array of stories, offering a refreshing change. ‘Dream Girl 2’ is a mass comedy that promises to tickle funny bones and serve as a delightful respite from the ordinary.",
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 14,
            heading: 'RRR sequel reportedly confirmed, read details inside' ,
            image: 'https://filmfare.wwmindia.com/content/2023/jul/rrr41688980930.jpg' ,
            description: "The sequel to the megahit movie RRR has been confirmed, according to reports.",
            contentDesc: "The sequel to the megahit movie RRR has been confirmed, according to reports. There haven't been many facts revealed, but filming is anticipated to begin shortly. A tweet surfaced online, “#RRRMovie sequel CONFIRMED. “We are planning to make a sequel of #RamCharan - #NTR’s #RRR. It will be in Hollywood Standards. The movie will either be directed by SS Rajamouli or someone under SSR supervision. Mahabaratham : The dream project of SS Rajamouli will commence very soon after the completion of Mahesh Babu’s jungle adventure film.- 'Vijayendra Prasad'.",
            category: 'Bollywood',
            Anish: 'Pradhan'
        },
        {
            id: 0,
            heading: 'Redken Makes a Bold Statement with its Debut in India, Revolutionizing the Hair Industry' ,
            image: 'https://filmfare.wwmindia.com/content/2023/aug/redken21691132173.jpg' ,
            description: "Redken, the #1 professional hair brand in the US*, has finally arrived in India.",
            contentDesc: "Redken, the #1 professional hair brand in the US*, has finally arrived in India, creating a buzz of excitement among hair enthusiasts across the country. Redken brings with it the perfect fusion of science and hairdresser expertise, empowering everyone to make a statement with their hair and express their true selves. At its core, Redken is renowned for its powerful hair transformations, made possible by its unique pH-balanced formulas that ensure the health and vitality of hair. The brand's extensive range of products covers all aspects of hair care, including colour, care, and styling, making it a one-stop solution for all your hair needs.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 1,
            heading: "Sophia Bush Files For Divorce After Just 13 Months With Husband Grant Hughes",
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/sophia-bush-files-for-divorce-after-just-13-months-001.jpg' ,
            description: "Sophia Bush has filed for divorce after just 13 months of marriage.",
            contentDesc: " Sophia Bush has filed for divorce after just 13 months of marriage.The former ‘One Tree Hill’ star tied the knot with Grant Hughes in June 2022 but have decided to go their separate ways just seven weeks after celebrating their first anniversary, though they are still on good terms.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 2,
            heading: 'Barbie Hitting Billion Dollar Mark At The Box Office Makes Warner Bros cheers' ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/barbies-success-hailed-as-a-watershed-moment-01.jpg' ,
            description: 'Barbie passed the landmark just 17 days after it was released, and Greta Gerwig has made history.',
            contentDesc: 'Barbie has already made $1 billion at the global box office.The star-studded movie passed the landmark just 17 days after it was released, and Greta Gerwig has made history, too, becoming the first woman to reach the milestone as a solo director.',
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 3,
            heading: "WWE To Get Back Its Blue-Eyed Boy ‘The Rock’ Dwayne Johnson Back In The Ring?" ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/wwe-to-get-back-its-blue-eyed-boy-the-rock-dwayne-johnson-back-in-the-ring-roman-reigns-match-hints-a-possible-comeback.jpg' ,
            description: "WWE might have hinted at a possible return of Dwayne Johnson in Wrestlemania 40. Could it happen? Read inside for more!",
            contentDesc: '"WWE has passed on one too many chances to bring back Dwayne ‘The Rock’ Johnson, the People’s Champ. Well, they skipped on yet another, much to fan’s dismay. SummerSlam 2023, which took place at Ford Field in Detroit, went into full swing, with Roman Reigns and Jey Uso highlighting the main event. The match was truly captivating, and the stakes were high this time. Not only did Reigsn have to defend his title, but if he was to lose, he would also have to give up the position as The Tribal Chief.',
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 4,
            heading: 'When Rihanna Was Bashed & Boycotted By Muslim Fans For Using A Sacred Islamic Verse' ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/rihanna-was-bashed-boycotted-by-muslim-fans-for-using-a-sacred-islamic-verse-as-a-song-to-make-models-wearing-lingeries-dance.jpg' ,
            description: 'Rihanna was once bashed by her Muslim Fans after she used a sacred Islamic verse during her Savage x Fenty lingerie show. Read more!',
            contentDesc: "Rihanna is so much more than just a singer and a performer. The artist embarked on a new journey with her beauty brand Fenty which became a luxury for most women in in no time. The brand was an immediate success. However, it did come with some serious backlash. During the second annual Savage X Fenty lingerie show, the singer’s management overlooked a major detail that sparked concerns amongst her Muslim fans.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 5,
            heading: "When Sydney Sweeney Donned A Transparent Bikini Getting On Bed Turning Into A S*xy Seductress" ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/sydney-sweeney-once-oozed-of-old-world-glam-as-she-flaunted-her-bbs-as-in-a-nsfw-sheer-black-lingerie-set-shes-too-hot-handle-001.jpg' ,
            description: "This 2020 photoshoot of Sydney Sweeney slaying in transparent black Savage lingeries is one of the s*xiest we have seen till day",
            contentDesc: "25-year-old Sydney Sweeney needs no introductions. The American actress – who gained immense international fame playing Cassie Howard in HBO’s Euphoria is a sensual beauty who mesmerizes all with her beauty, grace and charm.Sweeney – who currently has a strong presence on Instagram with a 15.5 million following, was appointed an ambassador for Rihanna’s Savage X Fenty in March 2020. And let us tell you, her introductory photoshoot saw her turn into a seductress who can cast a spell on all. Scroll below to check out the look.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 6,
            heading: "When Kylie Jenner Revealed One Of Her First Kisses Made Her Insecure About Her “Small” Lips" ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/when-kylie-jenner-revealed-one-of-her-first-kisses-made-her-insecure-about-her-small-lips-001.jpg' ,
            description: "Kylie Jenner once revealed the reason behind her insecurity about her “smaller lips” and it will leave you in shock. Read on!",
            contentDesc: "Kylie Jenner has been making headlines ever since she got candid about the work she has gotten done on her body. The American socialite has admitted to having a b**b job before having her daughter Stormi with Travis Scott. Well, this is not the first time Kylie has opened up about going under the knife or getting fillers. She once revealed how she did not like her lips after a guy pointed out that she had small lips.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 7,
            heading: "Selena Gomez Goes On Yet Another Alleged Date With Zayn Malik In Los Angeles?" ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/selena-gomez-goes-on-yet-another-alleged-date-with-zayn-malik-in-los-angeles-netizens-react-deets-inside-001.jpg' ,
            description: "Amid romance rumours, Selena Gomez goes out on an alleged date with Zayn Malik in Los Angeles. Find out the truth below.",
            contentDesc: "Selena Gomez is currently on a roll on social media and sharing reels and pictures of herself on TikTok and Instagram, treating her fans time and again. The singer is also making alleged romance rumours with Zayn Malik, and on to the series of new events, new reports state that both Sel and Zayn reportedly went on an alleged date in Los Angeles. Netizens are now reacting to the reports on social media, and scroll below to read the scoop.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 8,
            heading: "Daniel Radcliffe Hitting Bars & Hooking Up With Women Months After Secretly Welcoming His First Child?" ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/new-rumours-have-suggested-that-daniel-radcliffe-is-hitting-bars-and-hooking-up-with-women-months-after-secretly-welcoming-his-first-child.jpg' ,
            description: "Daniel Radcliffe is apparently hitting bars despite going sober earlier and is meeting new women. Read on to know what is really happening",
            contentDesc: "Daniel Radcliffe recently welcomed his first child with his wife Erin Darke in April 2023, and the two seem to be getting busy with him. However, a Reddit post has claimed that the Harry Potter star seems to be hitting the bars and hooking up with women and that too with the permission of his wife. Social media users were quick to react to the news as many claimed Daniel has been sober for too long while others suggested that there is nothing wrong in socialising. Scroll down to know more.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  9,
            heading: 'When Johnny Depp Held A Police Officer’s Wrist In A Scene Who Was Pointing His Gun ' ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/johnny-depp-held-a-police-officers-wrist-in-a-scene-who-was-pointing-his-gun-at-a-9-year-old-girl-for-bringing-real-tears-slammed-directors-strategy.jpg' ,
            description: "Johnny Depp protected a nine-year-old actress while shooting for 'Platoon' as the situation escalated. Read inside for more details!",
            contentDesc: "There is a lot that goes into directing an Oscar-worthy movie, as anyone would agree. One such director who violated his boundaries to bring his vision to life was Oliver Stone while he was working on the 1987 movie ‘Platoon’ which eventually won Best Picture at the 59th Academy Awards. Based on the real-life Vietnam wars, the movie is as intense as possible. The movie also stars Johnny Depp. In one incident, Stone went too deep into the moment and Depp had to take care of the escalating situation.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  10,
            heading: "Zack Snyder’s Justice League Sequel Had Plans Of Making This Villain A “Big Baddy Of The DC Universe”" ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/zack-snyders-justice-league-sequel-had-plans-of-making-this-villain-a-big-baddy-of-the-dc-universe.jpg' ,
            description: "New details have now revealed Zack Snyder had plans of carrying the DCEU even further with an entirely new villain. Read on for more!",
            contentDesc: "DCEU kicked off in the right direction with Zack Snyder behind the wheel. However, not every great thing comes to fruition. The same thing happened with the Snydervesrse, which was a detailed plan of your favourite DC superheroes going against the most powerful supervillains. It all came crashing down in 2016 when Justice League dropped and the movie was slammed by almost everyone. Now, a DCEU creative has revealed the big plans they had for the Justice League Sequel. There was going to be a Flash villain!",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  11,
            heading: 'Jamie Foxx Issues An Apology To Jewish Community Over His Anti-Semitic Post: “That Was Never My Intent”' ,
            image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/jamie-foxx-issues-apology-over-controversial-post-001.jpg' ,
            description: "Jamie Foxx has now taken to social media to issue an apology and to insist that his words had been misunderstood.",
            contentDesc: "Foxx has now taken to instagram to issue an apology and to insist that his words had been misunderstood.The actor explained: “I want to apologize to the Jewish community and everyone who was offended by my post. I now know my choice of words have caused offense and I’m sorry. That was never my intent. “To clarify, I was betrayed by a fake friend and that’s what I meant with ‘they’ not anything more. I only have love in my heart for everyone. I love and support the Jewish community. My deepest apologies to anyone who was offended. Nothing but love always, Jamie Foxx.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  12,
            heading: 'Taylor Swift’s Eras Tour: New North America & International Dates, Surprise Songs, Full Setlist & More' ,
            image: 'https://hollywoodlife.com/wp-content/uploads/2023/03/taylor-swift-eras-tour-ss-2.jpg?w=680' ,
            description: "Catch up on which surprise songs Taylor Swift has played on her Eras Tour and find out everything else to know about the show!",
            contentDesc: "Taylor Swift has been performing multiple shows a week for her Eras Tour since kicking it off in Glendale, Arizona in March.The setlist features 44 songs, with two of those songs being rotated out for surprises each night.Taylor will continue the U.S. leg of the tour until the beginning of August, before embarking on a Latin American leg at the end of 2023.In 2024, the Eras Tour will go International with months of dates overseas, as well as come back to North America for stops in USA and Canada!",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  13,
            heading: 'Britney Spears Flexes To Cardi B While Rocking A Mini Dress in New Video' ,
            image: 'http://hollywoodlife.com/wp-content/uploads/2020/04/britney-spears-over-the-years-7.jpg?w=680' ,
            description: "The 'Toxic' singer slowed things down a bit while modeling a sexy peach mini dress and vibing to Cardi B!",
            contentDesc: "Britney Spears took a break from her usual dance videos to model a plunging silky peach mini dress! In the Friday, August 4 Instagram video, the pop legend showed off in the skintight micro mini dress with bare shoulders and long, puffy, cold-shoulder sleeves. She adjusted the bustline of the dress as she modeled the sexy number from various angles, and she played Cardi B‘s “Thru Your Phone” as she preened for the camera. She wore her blonde hair long and straight and accessorized with gold earrings. “Everyone was right about the night !!!” she captioned the post, seemingly referencing Cardi’s lyrics.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  14,
            heading: 'Beyoncé stuns fans as she shines in gold mini dress on Renaissance Tour stop in Washington' ,
            image: 'https://www.pinkvilla.com/images/2023-08/693671857_img-1760.jpg' ,
            description: "Beyoncé wowed fans in a '70s glam gold mini dress by Self-Portrait on her Renaissance Tour. Blue Ivy made surprise appearances, adding to the magic.",
            contentDesc: "Beyoncé's Renaissance Tour continues to captivate audiences worldwide, and her latest show in Summerfield, Maryland, was no exception. The 41-year-old music icon wowed fans with yet another dazzling look, this time in a custom-made gold sequin mini dress from the contemporary label, Self-Portrait.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id:  15,
            heading: "BLACKPINK’s Pink Venom, NewJeans’ ETA featured during Beyoncé's Renaissance World Tour Pre-Show" ,
            image: 'https://www.pinkvilla.com/images/2023-08/686961155_bp_newjeans_beyonce.jpg' ,
            description: "Beyoncé's Renaissance World Tour Pre-Show became viral amongst K-pop fans as she played BLACKPINK’s Venom, NewJeans’ ETA and other songs. Read ahead to know more.",
            contentDesc: "Recently, Beyoncé has been on her Renaissance World Tour and in the pre-shows, she has been playing many songs from around the world and some of them were K-pop songs like BLACKPINK’s Pink Venom, NewJeans’ ETA, IVE’s Wave has been appearing in the playlist! NewJeans’ Twitter sees this and uploads a tweet saying that “Beyoncé included ETA in tonight’s Renaissance pre-show playlist!” Seeing this shows how K-pop has become mainstream now and even new artists like NewJeans have an impact on the global scale.",
            category: 'Hollywood',
            Anish: 'Pradhan'
        },
        {
            id: 0,
            heading: "Norway fines Facebook owner Meta over privacy breaches" ,
            image: "https://images.indianexpress.com/2023/08/Meta-3.jpg?w=640" ,
            description: "The regulator, Datatilsynet, had said on July 17 that the company would be fined if it did not address privacy breaches the regulator had identified.",
            contentDesc: "Facebook owner Meta Platforms will be fined 1 million crowns ($98,500) per day over privacy breaches from Aug. 14, Norway’s data protection authority told Reuters on Monday, a decision that could have wider European implications.The regulator, Datatilsynet, had said on July 17 that the company would be fined if it did not address privacy breaches the regulator had identified.Meta Platforms did not immediately reply to a request for comment.Datatilsynet had said Meta cannot harvest user data in Norway, such as users’ physical locations, and use it to target advertising at them, called behavioural advertising, a business model common to Big Tech.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 1,
            heading: "Netflix just made liking/disliking content on smartphones easier" ,
            image: "https://images.indianexpress.com/2023/08/netflix-1.jpg?w=640" ,
            description: "Netflix's new rating feature is available for iOS devices and will be extended to Android devices soon.",
            contentDesc: "Netflix has announced a new way to express preferences for its shows on smartphones. iPhone users can now provide feedback through a thumbs up, a double thumbs up, or even a thumbs down while watching movies or web series. Currently available for iOS, this feature will soon be extended to Android devices.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 2,
            heading: "Adobe’s Figma deal faces EU competition investigation" ,
            image: "https://images.indianexpress.com/2023/08/Adobe.jpg?w=640" ,
            description: "Figma's web-based collaborative platform for designs and brainstorming is popular among tech companies including Zoom Video Communications, Airbnb and Coinbase .",
            contentDesc: "Adobe’s $20 billion bid for cloud-based designer platform Figma could reduce competition in global markets for interactive product design tools and also shut out rivals, EU antitrust regulators said on Monday. The European Commission said it opened a full-scale investigation into the deal after a preliminary review triggered concerns, confirming a Reuters story last month.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 3,
            heading: "Apple Testing M3 Max MacBook Pro Chip With 16-Core CPU, 40-Core GPU: Mark Gurman" ,
            image: "https://i.gadgets360cdn.com/large/macbook_air_m2_15_inch_apple_1685986202346.jpg?downsize=950:*" ,
            description: "Apple's M3 chip could feature the same configuration as the M2, with eight CPU cores and up to 10 GPU cores.",
            contentDesc: "Apple announced the MacBook Air model, powered by the company's M2 chip under the hood during the Worldwide Developers Conference (WWDC) 2023 in June. Now, the iPhone maker is expected to unveil an M3-powered MacBook Pro next year and the Cupertino giant is reportedly testing the next-generation M3 Max chip. The upcoming Apple silicon chip is said to include 16 central processing cores (CPU), 40 graphic processing cores (GPU), and up to 48GB of memory. The M3 Max chip has been in rumours for quite some time and could debut as a replacement for the M2 Max.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 4,
            heading: "Amazon Said to Meet US FTC Next Week Ahead of Potential Antitrust Lawsuit: Details" ,
            image: "https://i.gadgets360cdn.com/large/amazon_facebook_prime_day_1658573863476.jpg?downsize=950:*" ,
            description: "The FTC began probing Amazon during former US President Donald Trump's administration.",
            contentDesc: "Amazon.com is set to meet next week with the US Federal Trade Commission (FTC) ahead of a potential long-awaited antitrust lawsuit against the retailer, according to a source familiar with the matter.The FTC began probing Amazon during former President Donald Trump's administration when the government decided to investigate Amazon, Google, Facebook, and Apple for allegedly breaking antitrust law. The company has been criticized for allegedly favoring its own products and disfavoring outside sellers on its platform, among other allegations. Amazon has denied wrongdoing.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 5,
            heading: "Google Pixel 8, Pixel 8 Pro Storage, Colour Options Tipped Again: All Details" ,
            image: "https://i.gadgets360cdn.com/large/pixel_7_series_facebook_google_1688360441595.jpg?downsize=950:*" ,
            description: "Google Pixel 8 series models are likely to be powered by in-house Tensor G3 SoCs.",
            contentDesc: "Google Pixel 8 and Pixel 8 Pro are expected to launch soon as successors to the Pixel 7 lineup, which was unveiled in October 2022. Compared to the Pixel 7 and the Pixel 7 Pro, the upcoming Pixel 8 series is said to include a new Tensor chipset, improved cameras, and slightly smaller footprint. Even though Google has not officially announced the models officially yet, details about the handsets have been doing rounds of the rumour mill for the past few weeks. A new leak now suggests the storage and colour options of the two highly-anticipated phones.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 6,
            heading: "Crypto Ponzi Scam Worth Rs. 1,000 Crore Unearthed by Odisha EOW, India Head of STA Crypto Token Arrested" ,
            image: "https://i.gadgets360cdn.com/large/Bermix_Studio_cryptoscam_unsplash_bigpic_1640680220999.jpg?downsize=950:*" ,
            description: "Police found that STA was not authorized by RBI or any other authorities to collect deposits and ran a Ponzi scheme in the garb of crypto tokens.",
            contentDesc: "The Economic Offence Wing (EOW) of Odisha Police on Monday claimed to have unearthed a Crypto Ponzi scam worth Rs 1,000 crore.The EOW arrested Gurtej Singh Sidhu, (40), the Indian head of 'STA Crypto token', a Ponzi firm from Sri-Ganganagar, Rajasthan.The EOW in a statement said that Gurtej is a native of Faridkot, Punjab. He was produced before a court in Sri Ganganagar and the court granted seven days of transit remand. He was brought to Odisha on Monday and will be produced before a court in Cuttack.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 7,
            heading: "PayPal Launches US Dollar Stablecoin for Financial Payments, Transfers" ,
            image: "https://i.gadgets360cdn.com/large/paypal_reuters_1659166952761.jpg?downsize=950:*" ,
            description: "PayPal's announcement, which lifted its shares 2.5 percent in afternoon trading, reflects a show of confidence in the troubled industry.",
            contentDesc: "Payments giant PayPal said on Monday it has launched a US dollar stablecoin, becoming the first major financial technology firm to embrace digital currencies for payments and transfers. While stablecoins — crypto tokens whose monetary value is pegged to a stable asset to protect from wild volatility — have been around for years now, they are yet to successfully make headway into the mainstream consumer payments ecosystem. PayPal's announcement, which lifted its shares 2.5 percent in afternoon trading, reflects a show of confidence in the troubled industry that has over the last 12 months grappled with regulatory headwinds that were exacerbated by a string of high-profile collapses. ",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 8,
            heading: "Crypto Scammers Fishing Victims on Android, iOS Via ChatGPT, Other AI Tools: Sophos" ,
            image: "https://i.gadgets360cdn.com/large/password_bloomberg_1661502839247.jpg?downsize=950:*" ,
            description: "In CryptoRom scams, as the name suggests, malicious actors initiate and weave a romantic relationship with their victims before attacking their savings.",
            contentDesc: "CryptoRom, a sub-category of pig butchering scams, is slyly sneaking up on Android and iOS users to dupe them off their crypto assets. The finding has been published by the Sophos cyber security firm on Monday. Its report has noted that crypto scammers are increasingly leveraging the power of Artificial Intelligence (AI) tools like ChatGPT to breach the security protocols offered by Google and Apple, targeting members of the crypto community.In pig-butchering scams, scammers talk to potential victims, develop a trusted bond, and later convince them to invest in cryptocurrency. Once their victims' digital wallets ‘fatten', these scammers hack into the wallets and steal the funds.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id:  9,
            heading: "OnePlus Open Price in India Tipped; Expected to Be Priced Lower Than Samsung Galaxy Z Fold 5" ,
            image: "https://i.gadgets360cdn.com/large/oneplus_open_new_renders_onleaks_Smartprix_1_1691410421119.jpg?downsize=950:*" ,
            description: "New leaked OnePlus Open design renders suggest the phone will have curved corners.",
            contentDesc: "OnePlus Open smartphone is expected to launch in India soon. 2023 has been a year of the foldable devices as Samsung recently launched Galaxy Z Fold 5 and the Galaxy Z Flip 5, while Tecno introduced its Phantom V Fold. The upcoming phone from OnePlus will be the first foldable smartphone from the Shenzhen-based mobile manufacturer. Details including design renders and specifications of the handset have been doing rounds of the rumour mill for a while now. A new leak hints at the price of the phone in India.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id:  10,
            heading: "iPhone 16 Pro Models to Feature Stacked Rear Camera Sensor Design: Ming-Chi Kuo" ,
            image: "https://i.gadgets360cdn.com/large/iphone_14_pro_gold_1683696510783.jpg?downsize=950:*" ,
            description: "iPhone 15 and iPhone 15 Plus are said to pack stacked CMOS image sensors for their 48-megapixel rear cameras.",
            contentDesc: "iPhone 15 series hasn't even launched yet, but we're already hearing multiple rumours about its successor — iPhone 16 series. Next year's high-end models are expected to feature a new rear camera sensor, according a report. A reputed market analyst suggests that Apple could pack new type of sensors in the camera units of the iPhone 16 Pro models. The sensors would allow the phones to capture better images in low light. Meanwhile, the vanilla iPhone 15‌ and ‌‌iPhone 15‌‌ Plus are also expected to debut with a new image sensor.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id:  11,
            heading: "Paytm CEO Vijay Shekhar Sharma to Buy 10.3 Percent Stake in Firm From Antfin Amid China Concerns" ,
            image: "https://i.gadgets360cdn.com/large/paytm_reuters_full_1557923782093.JPG?downsize=950:*" ,
            description: "Sharma will now be the largest shareholder in the digital payments firm with a holding of 19.42 percent.",
            contentDesc: "Paytm Chairman Vijay Shekhar Sharma will buy a 10.3 percent stake worth $628 million (roughly Rs. 5,195 crore) in the firm he founded from an arm of Chinese fintech giant Ant Financial in a deal that would make him its single largest shareholder.The move comes as Sharma, who is also Paytm's chief executive, looks to simplify its ownership structure amid broader concerns about Chinese ownership in Indian financial technology companies, analysts said. Sharma will now be the largest shareholder in the digital payments firm with a holding of 19.42 percent.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id:  12,
            heading: "You will soon be able to use Microsoft Bing AI chat on new browsers, company reveals" ,
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/bing-ai-chat-083125-16x9.jpg?VersionId=eYWC_BDZYkw.4InpojivI_iac6JQIl3j&size=690:388" ,
            description: "Microsoft unveiled Bing AI chat in February this year and as the company celebrated six months of Bing AI's launch, it revealed that the chatbot will also be coming to third-party browsers soon.",
            contentDesc: "When Microsoft introduced the new Bing in February this year, it did some strange things at first. It confused users, made unusual requests, and even seemed to 'fall in love' with some people. These incidents made headlines and a lot was written about the new AI chatbot in town. However, eventually, Microsoft fixed Bing's mistakes and the incidents of the AI chatbot going rogue died down. And today, after 6 months of its launch, Bing seems to be in a strong position to compete with other AI chatbots and has features that didn't exist before.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id:  13,
            heading: "Personal Data Protection Bill: Entities May Face Penalty of Up to Rs. 250 Crore on Failing to Protect Data" ,
            image: "https://i.gadgets360cdn.com/large/digital_protection_unsplash_1681205739035.jpg?downsize=950:*" ,
            description: "Under the schedule, maximum of Rs. 250 crore and minimum Rs. 50 crore can be imposed on entity violating the norms.",
            contentDesc: "Entities misusing or failing to protect digital data users may face penalty of up to Rs. 250 crore, according to the Digital Personal Data Protection Bill 2023 which lays down obligations of entities handling and processing data as well as rights of individuals.The bill which was introduced in Parliament on Thursday moots creation of Data Protection Board of India and provides protection to the Centre, the board and its members, on 'action taken in good faith'. The bill has relaxed penalty norms compared to the proposal made in the draft DPDP that was circulated for public consultation in November 2022.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id:  14,
            heading: "Amazon Great Freedom Festival Sale 2023: Top Deals on Wearables Under Rs. 5,000" ,
            image: "https://i.gadgets360cdn.com/large/amazfit_pop_3s_amazon_1691058477577.jpg?downsize=950:*" ,
            description: "Redmi Smart Band Pro is available during the Amazon Great Freedom Festival sale at Rs. 1,798.",
            contentDesc: "Amazon Great Freedom Festival Sale 2023 has kicked off in India with discounts on different product categories. The sale is live now on the e-commerce platform for Prime members and will continue till August 8. It will be live for non-Prime shoppers on Friday, August 4. As always, mobile phones and laptops are the highlights of the sale, though, Amazon's Great Freedom Festival Sale has listed different wearables from popular brands at discounted rates. There are also bank offers to get additional discounts. The e-commerce marketplace has also joined hands with the State Bank of India (SBI) to offer an instant discount of up to 10 percent on purchases made using their credit cards. There are exchange offers and no-cost EMI options as well.",
            category: 'Technology',
            Anish: 'Pradhan'
        },
        {
            id: 0,
            heading: "Malaika Arora Starts Off The Week By Showing The Right Way Of 'Finding Your Balance'." ,
            image: "https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-36-1-16914729813x2.png?impolicy=website&width=510&height=356" ,
            description: "Malaika Arora is a true blue fitness icon who simply bewilders all with her dedication and love towards the practice of yoga. ",
            contentDesc: "Malaika Arora is a true blue fitness icon who simply bewilders all with her dedication and love towards the practice of yoga. Whether it is raining cats and dogs or there is just scorching heat, she fights it all to attend her regular yoga sessions and there is something to truly learn from her persistence. She keeps herself motivated no matter what and that is a very important learning in yoga .Every now and then Malaika takes to the Instagram account of her brand, Diva Yoga to share a message with her fans. These little messages are extremely motivating and just go on the prove the fact that the actress has learnt as much as possible when it comes to yoga and wants her fans and followers to take cues too. ",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 1,
            heading: "From Chutney To Mocktail, Make Cape Gooseberries Front And Centre Of Your Dish" ,
            image: "https://images.news18.com/ibnlive/uploads/2023/06/untitled-design-2023-06-07t174952.686-16861403973x2.jpg?impolicy=website&width=510&height=356" ,
            description: "Start your morning with a vibrant and nutritious smoothie bowl featuring makko rasbhari.",
            contentDesc: "Makko rasbhari, commonly known as cape gooseberries, offers a culinary canvas that can transform ordinary dishes into extraordinary gastronomic experiences. These small berries burst with a hint of tanginess and sweetness in your mouth. Whether you are aiming to add a hint of tanginess to your dishes or reap the health benefits of this vibrant fruit, there are many creative recipes that are bound to inspire your culinary adventures. From zesty chutneys to refreshing mocktails, each dish is a testament to the fruit’s versatility and its potential to add a burst of excitement to your meals. So, don your apron, gather your ingredients and embark on a flavourful journey that celebrates the charm of makko rasbhari in every bite. Here are some of the innovative recipes that celebrate this fruit.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 2,
            heading: "Long-term Smokers Displayed Symptoms Not Meeting Smoking-related Disease Criteria Shows Study" ,
            image: "https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-28-1-16912379733x2.png?impolicy=website&width=510&height=356" ,
            description: "The study included participants who had smoked one pack of cigarettes a day for 20 years or more.",
            contentDesc: "Long-term smokers showed symptoms not fitting any of the existing tobacco-related disease criteria, in a study conducted in the US. 1379 people aged 40 to 80 years were recruited. Half of them showed persistently high levels of respiratory symptoms such as shortness of breath, daily cough and phlegm, and decreased ability to exercise. However, they performed well in the breathing tests used to diagnose chronic obstructive pulmonary disease (COPD), researchers at the University of California-San Francisco (UCSF), US, found. COPD, known to be associated with long-term tobacco exposure, is evaluated through spirometry. It tests lung function by measuring how quickly and effectively a person fills and empties their lungs at maximum effort.'We found that many people who have a lot of primary tobacco exposure have the same symptoms as people who have COPD, but can’t be diagnosed with COPD,' said William McKleroy, first author of the study published in the Journal of the American Medical Association (JAMA).",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 3,
            heading: "Want to hover over water? Try these two new watersports in Chennai" ,
            image: "https://th-i.thgim.com/public/incoming/ai31yq/article66507871.ece/alternates/LANDSCAPE_1200/16mp-alampara3.jpg" ,
            description: "Brimming with activities, ECR now adds two new water sports to its range of offerings. Have you tried eFoiling and wakeboarding yet?",
            contentDesc: "Vipin Chourey glides and then flies over the backwaters making it look like a miracle. But he is actually on an eFoil board, slicing through the waters.A new introduction to Chennai’s water sport scene, eFoiling is like surfing. However, the board is powered by a battery and also comes with a motor, foil, mast, and propeller. It is remote controlled and the wireless technology for the same is concealed within the five feet board. ",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 4,
            heading: "First Lady Jill Biden shares how she finds ‘inner strength’ with exercise" ,
            image: "https://images.indianexpress.com/2023/08/jill.jpg?w=640" ,
            description: "Exercise has always been a vital part of Jill's life since she was a kid who enjoyed roller skating. She even took up ice skating in college and swimming when she was pregnant with her daughter Ashley.",
            contentDesc: "Whether it’s spin classes when she’s on the road, biking near the Delaware beach home or jogging on the White House’s driveway, First Lady of the US Jill Biden says that she gains “inner strength” from exercise.Jill’s dedication to her fitness is evident in her diverse workout routine, which she revealed to the Women’s Health magazine recently. An avid fan of barre classes that are a mix of ballet, Pilates and yoga, the first lady’s commitment to her fitness helps her achieve improved flexibility, strength and balance.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 5,
            heading: "Find out Janhvi Kapoor’s favourite gluteus exercises" ,
            image: "https://images.indianexpress.com/2023/07/janhvi-kapoor-8.jpg?w=640" ,
            description: "Celebrity fitness trainer Namrata Purohit recently shared her friend and student Janhvi's favourite glutes exercises, which she performs from the comfort of her home.",
            contentDesc: "We always look up to our beloved celebrities for fitness inspiration and it is remarkable how most of them are able to dedicate time to fitness amid their busy schedules. What we can learn from them is that it is not required to go to the gym or use elaborate equipment to exercise. In fact, we can start off with a basic workout at home with some props just like our favourite Janhvi Kapoor.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 6,
            heading: "Gautami Kapoor dances to go ‘stress-free’; can it really help?" ,
            image: "https://images.indianexpress.com/2023/06/gautami-kapoor.jpg?w=640" ,
            description: "If the infectious smile on her face in all her videos of dancing is to be believed, Kapoor does really seem free of stress",
            contentDesc: "Who can confess to never putting on your headphones and dancing like you had not a single care in the world? Well, Gautami Kapoor definitely can’t. The 48-year-old routinely puts videos of herself dancing with her daughter, her trainer, the people from her dance class, well, everyone.She recently posted a video dancing barefoot in a dance class, along with her trainer and others in the class. She hashtagged the picture #stressfree. If the infectious smile on her face in all her videos of dancing are to be believed, Kapoor does really seem free of stress.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 7,
            heading: "Kiran Bedi reveals fitness mantra at 74: ‘I have never had samosa, poori, kachori, pakode…’" ,
            image: "https://images.indianexpress.com/2023/08/kiran-bedi_amit-mehra.jpg?w=640" ,
            description: "Sharing some advice for those in their 30s and 40s, Dr Bedi said that it is necessary to first accept whatever situation you are in life",
            contentDesc: "One of the finest former officers of the Indian Police Force, Kiran Bedi is a name to reckon with. The former Lieutenant Governor of Puducherry is fit like a fiddle at 74. Sharing her fitness mantra, Dr Bedi revealed how meditation and yoga have helped her along with journaling, in a freewheeling conversation with Habuild founder Saurabh Bothra.'I have never had samosa, poori, kachori, pakode. I don’t eat ‘faltu‘ (useless) stuff for which I need to repent later. I never consciously have had fried stuff. If I crave pani puri, I would rather drink kanji,” said Bedi, who is credited as the first woman to join officer ranks in the Indian Police Service.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id: 8,
            heading: "Deepika Padukone stuns as she sports washboard abs: ‘Not so long ago…’" ,
            image: "https://images.indianexpress.com/2023/08/deepika-padukone_200_instaaa.jpg?w=640" ,
            description: "'Embracing a balanced diet fuels your journey to sports washboard abs and enhances overall well-being,' said Dr Esther Sathiaraj",
            contentDesc: "Trust Deepika Padukone to regularly give us fitness goals with her dedication and enviable physique. As such, the actor recently took everyone, including her husband and actor Ranveer Singh, by surprise as she dropped a picture displaying her toned abs.'Once upon a time…Not so long ago…,” wrote the Fighter actor. “A warning would’ve been nice,” wrote Ranveer in the comments section, and we could not agree more.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id:  9,
            heading: "Vidya Malavade does acro yoga; know more about the practice" ,
            image: "https://images.indianexpress.com/2023/07/vidya-malavade_200_insta.jpg?w=640" ,
            description: "Asanas on the mat is easy because the mat is stable - but here you’re in the air and supported only by arms or legs and that’s a whole new sensation to get used to",
            contentDesc: "Celebrities tend to take their fitness game a notch higher each day. And that is true in the case of the Chak De! India actor too. The yoga enthusiast is a fitness buff and like a true enthusiast was seen doing acro yoga even as she burst into a few laughs with her girl gang.“No idea why I must have this nervous moronic giggly response every time I try something NEW …Like an autonomous nervous response…and with the giggles, the balance goes for a complete toss as you can tell,” shared Vidya, 50.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id:  10,
            heading: "Nursing mother Gauahar Khan resumes resistance training postpartum" ,
            image: "https://images.indianexpress.com/2023/07/gauahar-khan_featured.jpg?w=640" ,
            description: "When approached with proper guidance and caution, resistance training can be a safe and effective way to support postpartum recovery ",
            contentDesc: "Gauahar Khan has been proving that if you have been consistent with workouts before pregnancy and childbirth, it can help you get back to your fitness routine much more quickly. As such, the nursing mother who has been on a weight loss spree for the past two months and even resumed her fitness journey within a span of 10 days after delivering her first child with Zaid Darbar, has been giving us some food for thought. The actor was recently seen doing resistance training and even boxing with her coach.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id:  11,
            heading: "Shweta Kawaatra on starting her fitness journey at 40" ,
            image: "https://images.indianexpress.com/2023/07/shweta-kawaatra.jpg?w=640" ,
            description: "Till my teens, I was into sports before the board exams and the stress sucked me in completely as it would have happened to most of us",
            contentDesc: "It’s never too late to embark on your fitness journey because every step forward is an investment in your well-being and vitality. Regardless of age or fitness level, taking care of your body and prioritising fitness can lead to numerous benefits. Engaging in regular physical activity not only improves physical health, strength, and flexibility but also enhances mental clarity and emotional well-being. As such, Shweta Kawaatra is glad to have started her fitness journey at 40.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id:  12,
            heading: "With a throwback picture, trainer reveals how Ranveer Singh managed to look ‘jacked’" ,
            image: "https://images.indianexpress.com/2023/07/ranveer-singh_1200_2016.jpg?w=640" ,
            description: "Everyone these days is looking for a quick fix. In fact, I can confidently tell you, the faster the results the more likely the method you used will unsustainable in the long-term",
            contentDesc: "Bollywood celebrities are at the peak of their fitness routine and have always managed to create awe around their transformation with the help of celebrity trainers. As such, when Lloyd Stevens, fitness trainer and transformation specialist, shared a throwback picture of actor Ranveer Singh from his 2016-Befikre days, we couldn’t help but go down the memory lane with Stevens, who opened up about how Singh managed to surprise everyone with his chiselled physique.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id:  13,
            heading: "This is Sunny Leone’s ‘favourite thing to do ever’; know how it helps your body" ,
            image: "https://images.indianexpress.com/2023/07/sunny-leone_1200_insta.jpg?w=640" ,
            description: "Nitesh Yadav, fitness expert, Mumbai said that skating is a great way to improve your mental fitness, help with balance and coordination as well as weight management",
            contentDesc: "unny Leone, known for her candid nature, never misses a chance to delight her fans and followers by showcasing her fun personal moments. Recently, the actor was spotted relishing a leisurely skating session in Dubai.The Kennedy actor rightfully captioned the post, “My favourite thing to do ever!” Taking some inspiration from her, we reached out to find out how skating can help you as a challenging and fun activity.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
        {
            id:  14,
            heading: "Try these 4 yoga asanas to improve your sexual health" ,
            image: "https://images.indianexpress.com/2023/07/yoga.jpg?w=640" ,
            description: "Pallavi Barnwal, Sexuality and Intimacy Coach, Yoga Instructor, said yoga is vital to form a 'connection, flow between your spirit, mind, and body for good sexual relationships'",
            contentDesc: "There are a lot of reasons for doing yoga, whether it is to beat bloating, relieve chronic back pain, or to calm an anxious mind. While your yoga mat might be the place you go to find your zen, it could also become a game-changer for your sex life.Pallavi Barnwal, Sexuality and Intimacy Coach, Yoga Instructor, said yoga is vital to form a 'connection between your innate, sacred sensuality, and your spirit, mind, and body for good sexual relationships.'It rises and falls and leads us into the oceans and valleys, of not just pleasure but insight and self-discovery, she added.",
            category: 'Fitness',
            Anish: 'Pradhan'
        },
    ])
  return (
    <div>
        <Data.Provider value={data}>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bollywood' element={<Bollywood/>} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/hollywood' element={<Hollywood/>} />
        <Route path='/fitness' element={<Fitness/>} />
        <Route path='/news/:id/:category' element={<Newpage/>} />
        <Route path='/morenews/:id/:category' element={<Newpage/>} />
      </Routes>
        </Data.Provider>
    </div>
  )
}

export default DataProvide