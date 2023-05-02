describe('Resizable box 1 maximum test', () => {
    it('should verify the resizable boxes', () => {
      // Visit the demoqa homepage
      cy.visit('https://demoqa.com/')
  
      cy.title().should('contain', 'DEMOQA')
  
      cy.contains('Interactions').click()
  
    
      
     //verifying initial height and width of box1
      cy.contains('Resizable').click()
  
      cy.contains('Resizable').should('exist')
  
      cy.get('#resizableBoxWithRestriction')
        .should('have.css', 'height', '200px')
        .should('have.css', 'width', '200px')
  
   
 // Dragging to maximum width and height
    cy.get("div[id='resizableBoxWithRestriction'] span[class='react-resizable-handle react-resizable-handle-se']")
    .should('have.class', 'react-resizable-handle react-resizable-handle-se')
    .trigger('mousedown', { which: 1 })
    .trigger('mousemove', { clientX: 1000, clientY: 500 })
    .trigger('mouseup', { force: true })
  

      // Verify  maximum height and width 
      cy.get('#resizableBoxWithRestriction')
        .should('have.css', 'height', '300px')
        .should('have.css', 'width', '500px')
  

          
        cy.wait(5000);
     
      
      cy.get("div[id='resizableBoxWithRestriction'] span[class='react-resizable-handle react-resizable-handle-se']").invoke('attr', 'style', 'z-index: 9999')
      .should('have.class', 'react-resizable-handle react-resizable-handle-se')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 50, clientY: 50 }) // Drag to minimum width and height
      .trigger('mouseup', { force: true })
      cy.wait(5000);
      cy.get('#resizableBoxWithRestriction')
    .should('have.css', 'height', '150px')
    .should('have.css', 'width', '150px')

 // Verify that Box 2 is resizable on basis of its css class
 cy.get('#resizable').should('have.class', 'box react-resizable')
    })

  })
  