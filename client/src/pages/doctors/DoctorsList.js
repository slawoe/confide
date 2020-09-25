import React, { useEffect, useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import ContentWithAddFunction from "../../components/ContentwithAddFunction";
import AddButton from "../../components/AddButton";
import DoctorsListElement from "../../components/DoctorsListElement";
import Searchbar from "../../components/Searchbar";
import { Link } from "react-router-dom";
import { fetchDoctors } from "../../api/doctors";
import Loading from "../../pages/LoadingPage";

function Doctors() {
  const [doctors, setDoctors] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const userName = "slawo.e";

  useEffect(() => {
    async function showDoctors() {
      const newDoctors = await fetchDoctors(userName);
      setDoctors(newDoctors);
      setIsLoaded(true);
    }
    showDoctors();
  }, []);

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenheadsection={<Searchbar placeholder={"Arzt suchen"} />}
      childrenmainsection={
        <ContentWithAddFunction
          addcomponent={
            <Link to="/main/doctors/add">
              <AddButton description={"Arzt hinzufügen"} />
            </Link>
          }
          content={
            <>
              {doctors?.map((doctor) => (
                <DoctorsListElement
                  key={doctor.id}
                  firstName={doctor.firstName}
                  lastName={doctor.lastName}
                  street={doctor.street}
                  zipAndLocation={doctor.zipAndLocation}
                  phone={doctor.phone}
                  mail={doctor.mail}
                  officeHours={doctor.officeHours}
                  id={doctor.id}
                />
              ))}
            </>
          }
        />
      }
    />
  );
}

export default Doctors;
