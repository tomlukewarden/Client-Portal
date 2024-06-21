import staff from '../../../../Data/staff';

function SolicitorCard() {
  return (
    <div className="staff-list">
      {staff.map((member) => (
        <div key={member.id} className="staff-card">
          <h3 className="name-card">{`${member.firstName} ${member.lastName}`}</h3>
          <p className="role-card">{member.role}</p>
          <p className="spec-card">
            Specialisations: {Array.isArray(member.specialisation) ? member.specialisation.join(", ") : member.specialisation}
          </p>
          <p className="email-card">{member.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SolicitorCard;
