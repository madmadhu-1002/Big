import { FaCar, FaLeaf } from 'react-icons/fa';
import { MdCarRental } from "react-icons/md";
import JointVentures from './JointVentures';
import { SiOverleaf } from 'react-icons/si';
import { PiBuildingsDuotone } from "react-icons/pi";
import BusinessSectors from './BusinessSectors';

const countries = [
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'OM', name: 'Oman' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'SA', name: 'Saudi Arabia' },
];

const cards = [
    { image: '/assets/businesscar1.png', title: 'BAHWAN LAMNALCO SAOC' },
    { image: '/assets/businesscar2.png', title: 'PAGE MIDDLE EAST', subtitle: '(EARLIER GENERAL DYNAMICS)' },
    { image: '/assets/businesscar3.png', title: 'HYUNET INDIA PRIVATE LTD (HPL)' },
    { image: '/assets/businesscar4.png', title: 'GREEN TECH ENERGY AND WATER' },
];

const OurBusiness = () => {
    return (
        <><div className='py-3' style={{ backgroundColor: "#DDF2FF" }}>
            <BusinessSectors />
            <JointVentures
                title="Automobiles"
                description="As a leading automotive distributor, Bahwan International Group represents a wide portfolio of globally renowned vehicle brands, bringing the latest car models and exceptional service to its markets."
                icon={<FaCar size={60} color="#fff" />}
                countries={countries}
                cards={cards}
            />
            <JointVentures
                title="Rental"
                description="Bahwan International Group offers comprehensive rental solutions including equipment, vehicles, and tools backed by flexible terms and dependable support, making it a trusted partner for all your rental needs."
                icon={<MdCarRental size={60} color="#fff" />}
                countries={countries}
                cards={cards}
            />
            <JointVentures
                title="Food"
                description="Bahwan International Group delivers premium food solutions through its comprehensive import, distribution, and marketing network, offering top-quality products with industry-leading reliability and market reach."
                icon={<FaLeaf size={60} color="#fff" />}
                countries={countries}
                cards={cards}
            />
            <JointVentures
                title="Renenwable Energy"
                description="Bahwan International Group Renewable Energy is a forward-looking enterprise dedicated to advancing sustainable development through cutting edge solar and wind energy solutions from designing and constructing Oman’s first utility-scale PV plant to pioneering predictive analytics collaborations and grid-connected renewable projects."
                icon={<SiOverleaf size={60} color="green" />}
                countries={countries}
                cards={cards}
            />
            <JointVentures
                title="Joint Ventures"
                description="Strategic alliances with leading international companies fortify Bahwan International Group’s market leadership across multiple sectors."
                icon={<PiBuildingsDuotone size={60} color="#fff" />}
                countries={countries}
                cards={cards}
            />
        </div>
        </>
    )
}

export default OurBusiness