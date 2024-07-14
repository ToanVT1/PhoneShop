import { Text } from "../phoneShop/text";
import css from "./index.module.css";


export function Card ({name, price, image, onChangePhoneDetail, id}){
    return(
        <>
        <div className={css.card}>
            <div className={css["card-img"]}>
                <img src={image} alt="" />
            </div>
            <div className={css["card-content"]}>
                <Text as={"h2"}>{name} </Text>
                <Text as="p">{price}$</Text>

                <div className={css['card-footer']}>
                <button onClick={onChangePhoneDetail} className="btn btn-dark">Xem Chi Tiet</button>
                <button onClick={()=>{}} className="btn btn-dark">Them Vao Gio Hang</button>
                </div>
               

            </div>

        </div>
        </>
    )
} 