import animate from "@/mixins/Bezier";

describe('Mixins: Bezier', () => {
  describe('Function: animate', () => {
    it('Should call callback at next requestAnimationFrame',  () => {
      const mockupFunc = jest.fn()
      animate({
        from: 0,
        to: 1,
        duration: 100,
        each: () => {
          mockupFunc()
        },
        easing: 'linear'
      })
      requestAnimationFrame(() => {
        expect(mockupFunc).toBeCalled()
      })
    })
  })
})