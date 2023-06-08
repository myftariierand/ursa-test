import type { NextPage } from 'next'

import DefaultLayout from 'layout/DefaultLayout'
import CreateProject from 'components/project/CreateProject'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CreateProject />
    </DefaultLayout>
  )
}

export default Home
