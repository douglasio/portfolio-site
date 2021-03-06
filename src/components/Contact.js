import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as Styled from './Contact.styles';

const Contact = ({ items, title, horizontal }) => {
    const COMPONENT = horizontal ? Styled.ContactHorizontal : Styled.Contact;

    return (
        <COMPONENT className="contact-section">
            {!horizontal && <h2>{title}</h2>}
            <ul className="has-sprites">
                <li>
                    <a
                        className="sprite"
                        href={`tel:+${items.phone.value.replace(
                            /[^\d.-]/g,
                            ''
                        )}`}>
                        <FontAwesomeIcon icon={faPhone} />
                        {items.phone.name}
                    </a>
                </li>
                <li>
                    <a className="sprite" href={`mailto:+${items.email.value}`}>
                        <FontAwesomeIcon icon={faAt} />
                        {items.email.name}
                    </a>
                </li>
                <li>
                    <a
                        className="sprite"
                        href={items.linkedin.value}
                        rel="noreferrer"
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        {items.linkedin.name}
                    </a>
                </li>
                <li>
                    <a
                        className="sprite"
                        href={items.github.value}
                        rel="noreferrer"
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        {items.github.name}
                    </a>
                </li>
            </ul>
        </COMPONENT>
    );
};

export default Contact;
