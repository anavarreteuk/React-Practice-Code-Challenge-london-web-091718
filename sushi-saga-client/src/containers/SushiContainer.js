import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiToRender.map(sushi => <Sushi isSushiEaten={props.isSushiEaten} eatSushi={props.eatSushi} key={sushi.id} sushi={sushi} />)
        }
        <MoreButton button={props.button} />
      </div>
    </Fragment>
  )
}

export default SushiContainer