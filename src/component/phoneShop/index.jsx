import { mockData } from "./__mock-data__";
import { Card } from "../card";
import { Fragment } from "react";
import { XemChiTiet } from "../xem-chi-tiet";

// const [phoneDetail, setPhoneDetail] = useState(mockData[0]);

// useEffect(() => {
//   return () => {};
// }, []);

// const onChangePhoneDetail = (phone) => {
//   setPhoneDetail(phone);
// };

export function PhoneShop() {
  console.log(mockData);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
        }}
      >
        {mockData.map((item) => {
          return (
            <Fragment key={item.maSP}>
              <Card
                name={item.tenSP}
                price={item.giaBan}
                image={item.hinhAnh}
              />
            </Fragment>
          );
        })}
        {/* <div>
          <XemChiTiet
            name={phoneDetail.tenSP}
            img={phoneDetail.hinhAnh}
            manHinh={phoneDetail.manHinh}
            cameraSau={phoneDetail.cameraSau}
            cameraTruoc={phoneDetail.cameraTruoc}
            heDieuHanh={phoneDetail.heDieuHanh}
            ram={phoneDetail.ram}
            rom={phoneDetail.rom}
          />
        </div> */}
      </div>
    </>
  );
}
