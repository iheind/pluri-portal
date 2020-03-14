import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonModal,
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonRange,
  IonButton
} from "@ionic/react";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  peopleCircleOutline,
  lockClosedOutline,
  schoolOutline,
  personAddOutline,
  personCircleOutline,
  mailOutline,
  maleFemaleOutline,
  briefcaseOutline
} from "ionicons/icons";
import { store } from "../stores/Store";
import { useForm, Controller } from "react-hook-form";
import "./UserForm.css";

let renderCount = 0;
let initialValues = {
  rangeInfo: -100,
  fullName: "",
  lastName: "",
  gender: "",
  techCos: "",
  email: ""
};

const UserForm: React.FC = observer(() => {
  const { control, handleSubmit, formState, reset, errors } = useForm({
    defaultValues: { ...initialValues },
    mode: "onChange"
  });

  const [data, setData] = useState();
  renderCount++;

  /**
   *
   * @param _fieldName
   */
  const showError = (_fieldName: string) => {
    let error = (errors as any)[_fieldName];
    return error ? (
      <div style={{ color: "red", fontWeight: "bold" }}>
        {error.message || "Field Is Required"}
      </div>
    ) : null;
  };

  /**
   *
   * @param data
   */
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
    setData(data);
  };

  return (
    <IonContent color="dark" class="ion-padding">
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 18 }}>
        <IonLabel color="light">
          <h1>Information</h1>
        </IonLabel>
        <IonItem color="dark" class="">
          <IonIcon slot="start" icon={personCircleOutline}></IonIcon>

          <Controller
            as={IonInput}
            placeholder="First Name"
            className="firstCapital"
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("fullName", selected.detail.value);
              return selected.detail.value;
            }}
            name="fullName"
            rules={{
              required: true,
              minLength: { value: 4, message: "Must be 4 chars long" }
            }}
          />
        </IonItem>
        {showError("fullName")}
        <IonItem color="dark" class="">
          <IonIcon slot="start" icon={peopleCircleOutline}></IonIcon>

          <Controller
            as={IonInput}
            placeholder="Last Name"
            className="capitalize"
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("lastName", selected.detail.value);
              return selected.detail.value;
            }}
            name="lastName"
            rules={{
              required: true,
              minLength: { value: 4, message: "Must be 4 chars long" }
            }}
          />
        </IonItem>
        {showError("lastName")}
        <IonItem color="dark">
          <IonIcon slot="start" icon={mailOutline}></IonIcon>
          <Controller
            as={IonInput}
            placeholder="Email"
            inputmode="email"
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              return selected.detail.value;
            }}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            }}
          />
        </IonItem>
        {showError("email")}
        <IonItem color="dark" class="ion-margin-bottom">
          <IonIcon slot="start" icon={maleFemaleOutline}></IonIcon>
          <IonLabel>Gender</IonLabel>
          <Controller
            as={
              <IonSelect placeholder="Select One">
                <IonSelectOption value="FEMALE">Female</IonSelectOption>
                <IonSelectOption value="MALE">Male</IonSelectOption>
              </IonSelect>
            }
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log(selected.detail.value);
              return selected.detail.value;
            }}
            name="gender"
            rules={{ required: true }}
          />
        </IonItem>
        <IonLabel color="light">
          <h1>Role</h1>
        </IonLabel>
        <Controller
          as={
            <IonRadioGroup>
              <IonItem color="dark">
                <IonIcon slot="start" icon={schoolOutline}></IonIcon>
                <IonLabel>Student</IonLabel>
                <IonRadio value="Student" />
              </IonItem>
              <IonItem color="dark">
                <IonIcon slot="start" icon={briefcaseOutline}></IonIcon>
                <IonLabel>Teacher</IonLabel>
                <IonRadio value="Teacher" />
              </IonItem>
            </IonRadioGroup>
          }
          control={control}
          name="techCos"
          rules={{ required: true }}
          onChangeName="onIonChange"
          onChange={([selected]) => {
            console.log(selected.detail.value);
            return selected.detail.value;
          }}
        />

        <IonItem color="dark">
          <IonLabel>Promo</IonLabel>
          <Controller
            as={
              <IonSelect placeholder="Select One">
                <IonSelectOption value="1CPI">1CPI</IonSelectOption>
                <IonSelectOption value="2CPI">2CPI</IonSelectOption>
                <IonSelectOption value="1CS">1CS</IonSelectOption>
                <IonSelectOption value="2CS-SIW">2CS-SIW</IonSelectOption>
                <IonSelectOption value="2CS-ISI">2CS-ISI</IonSelectOption>
                <IonSelectOption value="3CS-SIW">3CS-SIW</IonSelectOption>
                <IonSelectOption value="3CS-ISI">3CS-ISI</IonSelectOption>
              </IonSelect>
            }
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log(selected.detail.value);
              return selected.detail.value;
            }}
            name="gender"
            rules={{ required: true }}
          />
        </IonItem>

        {data && (
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        <IonButton
          color="danger"
          type="button"
          onClick={() => {
            reset(initialValues);
          }}
        >
          Reset Form
        </IonButton>
        <IonButton
          color="light"
          type="submit"
          disabled={formState.isValid === false}
        >
          Submit
        </IonButton>
      </form>
    </IonContent>
  );
});

export default UserForm;