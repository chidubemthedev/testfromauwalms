import { useEffect, useState } from "react";
import Chevronleft from "../icons/Chevronleft";
import ChevronRight from "../icons/ChevronRight";
import Circle from "../icons/Circle";

const Matches = () => {
  const [matches, setMatches] = useState();
  const [round, setRound] = useState(1);
  const [players, setPlayers] = useState([
    {
      challenged: "challenged",
      challenger: "challenger",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/matches.json");
      const data = await res.json();
      setMatches(data);
      setPlayers([
        {
          challenged:
            data[0].challenged.firstname + " " + data[0].challenged.lastname,
          challenger:
            data[0].challenger.firstname + " " + data[0].challenger.lastname,
        },
        {
          challenged:
            data[1].challenged.firstname + " " + data[1].challenged.lastname,
          challenger:
            data[1].challenger.firstname + " " + data[1].challenger.lastname,
        },
      ]);
    };
    fetchData();
  }, []);

  const handleRoundTwo = () => {
    setRound(2);
    setPlayers([
      {
        challenged:
          matches[3].challenged.firstname +
          " " +
          matches[3].challenged.lastname,
        challenger:
          matches[3].challenger.firstname +
          " " +
          matches[3].challenger.lastname,
      },
      {
        challenged:
          matches[4].challenged.firstname +
          " " +
          matches[4].challenged.lastname,
        challenger:
          matches[4].challenger.firstname +
          " " +
          matches[4].challenger.lastname,
      },
    ]);
  };

  const handleRoundThree = () => {
    setRound(3);
    setPlayers([
      {
        challenged:
          matches[6].challenged.firstname +
          " " +
          matches[6].challenged.lastname,
        challenger:
          matches[6].challenger.firstname +
          " " +
          matches[6].challenger.lastname,
      },
    ]);
  };

  return (
    <div className="bg-white min-h-[500px]">
      <div className="flex justify-between border-b items-center">
        <p className="pl-[20px] mt-[22px] mb-[12px]">Round {round}</p>
        <div className="flex gap-[24px] pr-[20px] h-5 items-center">
          <button className="px-[7px]">
            <Chevronleft />
          </button>
          <button className="px-[7px] bg-primary rounded-[3px]">1</button>
          <button
            onClick={handleRoundTwo}
            className="px-[7px] rounded-[3px] hover:bg-primary"
          >
            2
          </button>
          <button
            onClick={handleRoundThree}
            className="px-[7px] rounded-[3px] hover:bg-primary"
          >
            3
          </button>
          <button className="px-[7px]">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="flex px-[20px] flex-col-reverse md:flex-row">
        <div className="w-[50%] mt-[32px] flex flex-wrap gap-[44px]">
          {players.map((player, index) => (
            <div
              key={index}
              className="min-w-[232px] border-solid border-[1px] rounded-[5px]"
            >
              <div className="flex items-center border-b">
                <span className="flex items-center justify-center w-[38px] h-[41px] bg-secondary">
                  1
                </span>
                <p className="pl-[10px]">{player.challenged}</p>
              </div>
              <div className="flex items-center">
                <span className="flex items-center justify-center w-[38px] h-[41px] bg-primary">
                  2
                </span>
                <p className="pl-[10px]">{player.challenger}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] mt-[32px]">
          <ul>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span>
                <Circle color="#E89D2B" />
              </span>
              <li>Match is Ongoing</li>
            </div>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span>
                <Circle color="#AFAFAF" />
              </span>
              <li>Loser of the Match</li>
            </div>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span>
                <Circle color="#82B020" />
              </span>
              <li>Winner of the match</li>
            </div>
          </ul>
        </div>
      </div>

      {round === 1 ? (
        <button
          onClick={handleRoundTwo}
          className=" flex items-center justify-center mx-auto mt-[100px] bg-primary hover:bg-lime-400 shadow-3xl rounded-[16px] w-[40%] min-h-[52px]"
        >
          Proceed to Round 2
        </button>
      ) : null}

      <button
        onClick={handleRoundThree}
        className=" flex items-center justify-center mx-auto mt-[100px] bg-primary hover:bg-lime-400 shadow-3xl rounded-[16px] w-[40%] min-h-[52px]"
      >
        Proceed to Round 3
      </button>
    </div>
  );
};

export default Matches;
