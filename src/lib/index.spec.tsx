import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import test from 'ava'

import { ReactInventar } from '.'

configure({ adapter: new Adapter() })
test('Placeholder', t => {
	const rendered = shallow(
    <ReactInventar config={{ red: '#f00' }}>
      <div style={{ color: 'var(--red)' }}>123</div>
    </ReactInventar>
  )
  t.is(rendered.render().attr('style'), '--red:#f00')
})
