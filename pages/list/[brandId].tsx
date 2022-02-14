import { useRouter } from "next/router";
import React from "react";
import List from "../../components/List";

function ListTest() {
  const router = useRouter();
  const { brandId } = router.query;
  return (
    <div>
      <List brandId={brandId} />
    </div>
  );
}

export default ListTest;
