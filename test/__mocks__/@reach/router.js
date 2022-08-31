const React = require('react')

module.exports = {
  useLocation: jest.fn().mockReturnValue({
    pathname: '/mock-path'
  })
}
