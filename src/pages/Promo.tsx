import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    
  } from "@ionic/react";
  import React from "react";
 
  import Anime from "react-anime";
import "./Promo.css";
const Promo: React.FC = () => {

    return ( 

        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>
              <strong>Promos</strong>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="bg">
          <Anime opacity={[0, 1]} duration={2000} easing="easeOutElastic">
            <IonGrid>
              <IonRow class="ion-align-items-center">
                <IonCol></IonCol>
                <IonCol size="12" sizeMd="10">
                  <IonCard class="neum">
                    <IonCardHeader class="ion-text-center ion-padding">
                      <IonCardTitle color="light" className="title">
                        Promos
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonGrid>
                        <IonRow></IonRow>
                      </IonGrid>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
            </IonGrid>
          </Anime>
        </IonContent>
      </IonPage>
        );

};

export default Promo;