import PopperJs from 'popper.js'

function Popper() {
  const placements = PopperJs.placements
  return {
    destroy: () => {},
    scheduleUpdate: () => {},
    placements,
  }
}

export default Popper
