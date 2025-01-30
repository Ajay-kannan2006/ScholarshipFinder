import React from 'react';
import trophyImage from '../../assets/trophy-1.png';

const ScholarCard = ({ provider, application_deadline, name, total_award_amount, gender_applicable, caste_eligibility, studies_field_eligibility, application_link }) => {
    const deadline = new Date(application_deadline);
    const curr_time = new Date();
    const time_diff = deadline.getTime() - curr_time.getTime();
    const date_diff = Math.ceil(time_diff / (1000 * 60 * 60 * 24));

    const genderEligibility = gender_applicable.join(", ");
    const casteEligibility = caste_eligibility.join(", ");
    const studiesEligibility = studies_field_eligibility.join(", ");
    return (
        <>
            <a href={application_link} target="_blank" >
                <div className="scholar-card" >
                    <span className="header-card">
                        <p><b>{provider}</b></p>
                        <button>{date_diff} days to go</button>
                    </span>
                    <p className="card-name"><b>{name.toUpperCase()}</b></p>
                    <p>
                        <img src={trophyImage} alt="Trophy" />
                        <b>Award :</b>
                        &nbsp;&nbsp;INR {total_award_amount}
                    </p>
                    <p><b>Eligibility:</b></p>
                    <ul className="eligibility-list">
                        <li><b>Gender :</b> {genderEligibility}</li>
                        <li><b>Caste :</b> {casteEligibility}</li>
                        <li><b>Studies :</b> {studiesEligibility}</li>
                    </ul>
                </div>
            </a>
        </>
    );
};

export default ScholarCard;
