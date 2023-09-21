import React from 'react';
import Feature from '../../components/feature/Feature';
import './artifacts.css';

const featuresData = [
    {
        title: 'Ewer from 980-1020 CE',
        text: 'This ewer was made in the 10th century in the Fatimid Caliphate, which was located in modern-day Tunisia. It is made of glass and decorated with gold and enamel. It is an example of the high level of craftsmanship and artistic skill that existed in the Islamic world during this time period.',
    },
    {
        title: 'Zanj Rebellion Coins from 869-883 CE',
        text: 'These coins were minted during the Zanj Rebellion, which took place in the Abbasid Caliphate in modern-day Iraq. The rebellion was led by a group of African slaves who had been brought to the region to work on plantations. They revolted against their masters and established an independent state that lasted for 14 years before being defeated by the Abbasid army.',
    },
    {
        title: 'The Bahram Gur fights the Karg from 420-438 CE',
        text: 'This painting depicts the battle between the Persian king Bahram Gur and the Karg, a mythical creature that was said to live in the mountains of Iran. The painting is from the Shahnameh, an epic poem written by the Persian poet Ferdowsi in the 10th century.',
    },
    {
        title: 'Bustan of Saadi from 1257 CE',
        text: 'This painting depicts the Persian poet Saadi, who lived in the 13th century. He is shown sitting on a throne with a book in his hand. The painting is from the Bustan, a collection of poems written by Saadi.',
    },
    {
        title: 'Carpet Fragment from 1600-1700 CE',
        text: 'This carpet fragment was made in the 17th century in the Mughal Empire, which was located in modern-day India. It is made of silk and decorated with gold and silver thread. It is an example of the high level of craftsmanship and artistic skill that existed in the Mughal Empire during this time period.',
    },
    {
        title: 'Nishapur Slip-Painted Bowl from 900-1200 CE',
        text: 'This bowl was made in the 10th century in Nishapur, which was located in modern-day Iran. It is made of earthenware and decorated with slip-painting. It is an example of the high level of craftsmanship and artistic skill that existed in the Islamic world during this time period.',
    },
    {
        title: 'Plate from 1200-1300 CE',
        text: 'This plate was made in the 13th century in the Seljuk Empire, which was located in modern-day Turkey. It is made of earthenware and decorated with slip-painting. It is an example of the high level of craftsmanship and artistic skill that existed in the Islamic world during this time period.',
    },
    {
        title: 'Bottle from 1200-1300 CE',
        text: 'This bottle was made in the 13th century in the Seljuk Empire, which was located in modern-day Turkey. It is made of earthenware and decorated with luster-painted decoration. It is an example of the high level of craftsmanship and artistic skill that existed in the Islamic world during this time period.',
    },
    {
        title: 'Goat Figurine from 1000-1200 CE',
        text: 'This figurine was made in the 11th century, and is mad of bronze. It is an example of how animals were depicted in art during this time period and the artistic skill the common people had to make sculptures this realistic.',
    },
    {
        title: 'Folios from a Quran from 1250-1300 CE',
        text: 'These folies were made from 1250-1300 and depict the story of the Prophet Muhammad. This shows the importance of the Quran in Islamic culture and how it was used as a teaching tool for the religion.',
    },
    {
        title: 'Manumission document from 765 CE',
        text: 'This manumission document was written in 765 CE and is an example of how slaves were treated in the Islamic world. It shows that slaves were able to buy their freedom and that they were not treated as property.',
    },
    {
        title: 'Astrolabe of Muhammad ibn abi-bakr from 1235 CE',
        text: 'This astrolabe was made in 1235 CE and is an example of the scientific advancements that were made in the Islamic world during this time period. It shows how the Islamic world was able to advance in science and technology while Europe was in the Dark Ages.',
    }
];

const Artifacts = () => (
    <div className="gpt3__features section__padding" id="artifacts">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">Take a preview at what we have at our museum.</h1>
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Artifacts;