import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input"

const PersonalData = () => {
    return(
        <>
        <div className="wrapper__personalData">
            <div className="personalData__Column1">
                Фамилия*
                <Input placeholder="Фамилия"></Input>
                Имя*
                <Input placeholder="Имя"></Input>
                Отчество*
                <Input placeholder="Отчество"></Input>
                
            </div>
            <div className="personalData__Column2">
                Город*
                <Input placeholder="Город"></Input>
                Улица*
                <Input placeholder="Улица"></Input>
                Строение*
                <Input placeholder="Строение"></Input>
                Дом*
                <Input placeholder="Дом"></Input>
                Квартира*
                <Input placeholder="Квартира"></Input>
                Индекс*
                <Input placeholder="Индекс"></Input>

                <Button>Редактировать</Button>
            </div>
            
        </div>
        
        

        </>
    );
}

export default PersonalData;