import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './Job.styles';

export const Job = ({ details }) => {
    const {
        accomplishments,
        company,
        endDate,
        id,
        location,
        startDate,
        title,
    } = details;

    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate ? new Date(endDate).getFullYear() : 'Present';

    return (
        <Styled.Job>
            <h3 className="sprite">
                <FontAwesomeIcon icon={faCodeBranch} />
                {title}
            </h3>
            <h4>
                {company && company}
                {location && `, ${location}`}
                {startYear && (company || location) && ` | `}
                {startYear && `${startYear}—${endYear}`}
            </h4>
            <ul>
                {accomplishments.map((accomplishment, i) => {
                    return <li key={`${id}${i}`}>{accomplishment}</li>;
                })}
            </ul>
        </Styled.Job>
    );
};
