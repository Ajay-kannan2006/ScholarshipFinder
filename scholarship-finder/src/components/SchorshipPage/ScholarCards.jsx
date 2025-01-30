import ScholarCard from "./Scholarcard";

const ScholarCards = ({ details }) => {
    return (

        <div className="scholar-cards">
            {details.map((scholarship, index) => {
                return <ScholarCard
                    key={index}
                    name={scholarship.name}
                    provider={scholarship.provider}
                    application_deadline={scholarship.application_deadline}
                    total_award_amount={scholarship.total_award_amount}
                    gender_applicable={scholarship.gender_applicable}
                    caste_eligibility={scholarship.caste_eligibility}
                    studies_field_eligibility={scholarship.studies_field_eligibility}
                    application_link={scholarship.application_link}
                />
            })}
        </div>

    );
}
export default ScholarCards;
