import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function bounties() {
  const { contract } = useContract("0x000000000001F04A9533e92d7AD4dDe7DC19a8F3");
  const { data, isLoading } = useContractRead(contract, "bounties", [{{args}}])
}