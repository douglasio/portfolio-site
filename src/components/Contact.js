import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as Styled from './Contact.styles';

const Contact = ({ items, title }) => {
    return (
        <Styled.Contact>
            <h2>{title}</h2>
            <ul className="has-sprites">
                <li>
                    <a
                        href={`tel:+${items.phone.replace(
                            /[^\d.-]/g,
                            ''
                        )}`}>
                        <FontAwesomeIcon className="sprite" icon={faPhone} />
                        {items.phone}
                    </a>
                </li>
                <li>
                    <a href={`mailto:+${items.email}`}>
                        <FontAwesomeIcon className="sprite" icon={faAt} />
                        {items.email}
                    </a>
                </li>
                <li>
                    <a href={items.linkedin} target="_blank">
                        <FontAwesomeIcon className="sprite" icon={faLinkedin} />
                        {items.linkedin}
                    </a>
                </li>
                <li>
                    <a href={items.github} target="_blank">
                        <FontAwesomeIcon className="sprite" icon={faGithub} />
                        {items.github}
                    </a>
                </li>
            </ul>
        </Styled.Contact>
    );
};

export default Contact;
