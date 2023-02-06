import React from "react";
import { Product } from "@stripe/firestore-stripe-payments";
import { AiOutlineCheck } from "react-icons/ai";
interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className=" divide-y-2 divide-[gray]">
        <tr className="tableRow">
          <td className=" tableDataTitle">Monthy price</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? " text-[#e50914]"
                  : " text-[gray]"
              }`}
            >
              AED{product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className=" tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? " text-[#e50914]"
                  : " text-[gray]"
              }`}
            >
              {product.metadata.videoQuantity}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? " text-[#e50914]"
                  : " text-[gray]"
              }`}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV , computer mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? " text-[#e50914]"
                  : " text-[gray]"
              }`}
            >
              {product.metadata.portability === "true" && (
                <AiOutlineCheck className=" inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
