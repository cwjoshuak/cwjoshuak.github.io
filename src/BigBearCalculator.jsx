import { useState } from "react";

const BigBearCalculator = () => {
  const [numNight1People, setNumNight1People] = useState(10);
  const [numNight2People, setNumNight2People] = useState(6);
  const [numNight3People, setNumNight3People] = useState(0);

  const [additionalCosts, setAdditionalCosts] = useState(0);
  const [taxed, setTaxed] = useState(false);
  const [taxPct, setTaxPct] = useState(7.75);

  const [costNight1, setCostNight1] = useState(750);
  const [costNight2, setCostNight2] = useState(750);
  const [costNight3, setCostNight3] = useState(500);

  const [numNight2SubtractPeople, setNumNight2SubtractPeople] = useState(0);
  const [numNight3SubtractPeople, setNumNight3SubtractPeople] = useState(0);

  function calcTotalPrice() {
    return (
      parseFloat(additionalCosts) +
      (parseInt(costNight1) + parseInt(costNight2) + parseInt(costNight3)) *
        (taxed ? 1 + parseFloat(taxPct) / 100.0 : 1)
    );
  }
  function calcNumPeopleNight(night) {
    switch (night) {
      case 1:
        return parseInt(numNight1People);
      case 2:
        return (
          parseInt(numNight1People) +
          parseInt(numNight2People) -
          parseInt(numNight2SubtractPeople)
        );
      case 3:
        return (
          parseInt(numNight1People) +
          parseInt(numNight2People) -
          parseInt(numNight2SubtractPeople) +
          parseInt(numNight3People) -
          parseInt(numNight3SubtractPeople)
        );
      default:
        return "error";
    }
  }
  function calcCostPerPerson(night) {
    switch (night) {
      case 1: {
        let totalCost =
          parseFloat(costNight1) * (taxed ? 1 + parseFloat(taxPct) / 100.0 : 1);
        return totalCost / calcNumPeopleNight(1);
      }
      case 2: {
        let totalCost =
          parseFloat(costNight2) * (taxed ? 1 + parseFloat(taxPct) / 100.0 : 1);
        return totalCost / calcNumPeopleNight(2);
      }
      case 3: {
        let totalCost =
          parseFloat(costNight3) * (taxed ? 1 + parseFloat(taxPct) / 100.0 : 1);
        return totalCost / calcNumPeopleNight(3);
      }
      default:
        return "error";
    }
  }

  return (
    <div className="text-xl container mx-auto pt-16">
      <div className="flex justify-around">
        <div className="flex flex-col gap-1">
          <span className="text-3xl">Night 1</span>
          <label htmlFor="numNight1People">
            Number of People Staying Night 1{" "}
            <input
              name="numNight1People"
              onChange={(e) => setNumNight1People(e.target.value)}
              className="text-black text-center bg-gray-400 w-20"
              defaultValue={numNight1People}
            />
          </label>
          <div className="invisible">
            <input />
          </div>
          <div className="flex justify-between">
            <label htmlFor="costNight1">Cost</label>
            <input
              name="costNight1"
              onChange={(e) => setCostNight1(e.target.value)}
              defaultValue={costNight1}
              className="text-black text-center bg-gray-400 w-20"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl">Night 2</span>
            <div className="flex justify-between">
              <label htmlFor="numNight2People">
                Number of <span className="text-green-300">New</span> People
                Staying Night 2{" "}
              </label>
              <input
                name="numNight2People"
                onChange={(e) => setNumNight2People(e.target.value)}
                className="text-black text-center bg-gray-400 w-20"
                defaultValue={numNight2People}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="numNight2SubtractPeople">
                Number of People <span className="text-red-300">Leaving</span>{" "}
                from Night 1{" "}
                <input
                  name="numNight2SubtractPeople"
                  onChange={(e) => setNumNight2SubtractPeople(e.target.value)}
                  className="text-black text-center bg-gray-400 w-20"
                  defaultValue={numNight2SubtractPeople}
                />
              </label>
            </div>
            <div className="flex justify-between">
              <label htmlFor="costNight2">Cost</label>
              <input
                name="costNight2"
                onChange={(e) => setCostNight2(e.target.value)}
                defaultValue={costNight2}
                className="text-black text-center bg-gray-400 w-20"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl">Night 3</span>
            <div className="flex justify-between">
              <label htmlFor="numNight3People" className="justify-between">
                Number of <span className="text-green-300">New</span> People
                Staying Night 3{" "}
              </label>
              <input
                name="numNight3People"
                onChange={(e) => setNumNight3People(e.target.value)}
                className="text-black text-center bg-gray-400 w-20"
                defaultValue={numNight3People}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="numNight2SubtractPeople">
                Number of People <span className="text-red-300">Leaving</span>{" "}
                from Night 2{" "}
              </label>
              <input
                name="numNight3SubtractPeople"
                onChange={(e) => setNumNight3SubtractPeople(e.target.value)}
                className="text-black text-center bg-gray-400 w-20"
                defaultValue={numNight3SubtractPeople}
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="costNight3">Cost</label>
              <input
                name="costNight3"
                onChange={(e) => setCostNight3(e.target.value)}
                defaultValue={costNight3}
                className="text-black text-center bg-gray-400 w-20"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mx-auto justify-around flex flex-col gap-1 text-center">
        <label htmlFor="totalPrice">
          Total price:{" "}
          <input
            readOnly
            value={calcTotalPrice().toFixed(2)}
            name="totalPrice"
            className="text-black text-center bg-gray-400"
          />
        </label>
        <label htmlFor="additionalCosts">
          Additional Costs:{" "}
          <input
            className="text-black text-center bg-gray-400 w-20"
            defaultValue={additionalCosts}
            onChange={(e) => setAdditionalCosts(e.target.value)}
          />
        </label>
        <label htmlFor="taxed">
          Taxed{" "}
          <input
            type="checkbox"
            name="taxed"
            onChange={(e) => setTaxed(e.target.checked)}
          />
          <input
            className="text-black text-center bg-gray-400 w-20"
            disabled={!taxed}
            defaultValue={taxPct}
            onChange={(e) => setTaxPct(e.target.value)}
          />
          %
        </label>
      </div>
      <br />
      <br />
      <div className="flex flex-col">
        <table className="table-auto bg-slate-700 divide-gray-700 w-5/6 mx-auto text-center">
          <thead className="bg-slate-900">
            <tr>
              <th>Nights</th>
              <th>Number of People</th>
              <th>Cost Per Person Per Night</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Night 1</td>
              <td>{parseInt(numNight1People)}</td>
              <td>{calcCostPerPerson(1).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Night 2</td>
              <td>
                <span className="text-green-300">+{numNight2People}</span> /{" "}
                <span className="text-red-300">-{numNight2SubtractPeople}</span>{" "}
                / {calcNumPeopleNight(2)}
              </td>
              <td>{calcCostPerPerson(2).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Night 3</td>
              <td>
                <span className="text-green-300">+{numNight3People}</span> /{" "}
                <span className="text-red-300">-{numNight3SubtractPeople}</span>{" "}
                / {calcNumPeopleNight(3)}
              </td>
              <td>{calcCostPerPerson(3).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table-auto bg-slate-700 divide-gray-700 w-3/5 mx-auto text-center">
          <thead className="bg-slate-900">
            <tr>
              <th>Nights</th>
              <th># People</th>
              <th>Cost Per Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Night 1-3</td>
              <td>{calcNumPeopleNight(1)}</td>
              <td>
                $
                {(
                  calcCostPerPerson(1) +
                  calcCostPerPerson(2) +
                  calcCostPerPerson(3)
                ).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Night 2-3</td>
              <td>{calcNumPeopleNight(2)}</td>
              <td>
                ${(calcCostPerPerson(2) + calcCostPerPerson(3)).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Night 3 Only</td>
              <td>{calcNumPeopleNight(3)}</td>
              <td>${calcCostPerPerson(3).toFixed(2)}</td>
            </tr>
            <tr className="border-t-4 border-teal-600">
              <td className=" text-right font-bold">Total</td>
              <td></td>
              <td>
                $
                {(
                  parseFloat(additionalCosts) +
                  calcNumPeopleNight(1) * calcCostPerPerson(1) +
                  calcNumPeopleNight(2) * calcCostPerPerson(2) +
                  calcNumPeopleNight(3) * calcCostPerPerson(3)
                ).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BigBearCalculator;
