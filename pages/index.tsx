import type { NextPage } from 'next'
import {useQuery} from "react-query";
import {useEffect, useMemo} from "react";

const Home: NextPage = () => {
  const { data: entityDescription }: { data: Record<string, any> } = useQuery('user/description')

  useEffect(() => {
    console.log({ entityDescription })
  }, [entityDescription])

  const getForm = useMemo(() => {
    if (entityDescription) {
      const fields = Object.keys(entityDescription as Record<string, string>);
      console.log({ fields })

      return fields;
    }

    return []
  }, [entityDescription])

  return (
    <ul>
      { getForm.map(field => (
        <li>
          <input placeholder={entityDescription?.[field]?.name} type={entityDescription?.[field]?.kind} />
        </li>
      )) }
    </ul>
  )
}

export default Home
