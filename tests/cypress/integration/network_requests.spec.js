context('Network Requests', () => {
  it('GET - request to /api/inventory', () => {
    cy.request('https://tfg-iaas-vm.app.smartmock.io/api/inventory')
      .then((response) => {
        expect(response.status).to.eq(200)

        const data = JSON.parse(response.body.replace(/'/g, '"'))

        expect(data).to.have.property('method')
        expect(data).property('method').to.equal('GET')

        expect(data).to.have.property('description')
        expect(data).property('description').to.equal('get the inventory of an user')

        expect(data).to.have.property('response')
        expect(data).property('response').to.equal('items returned')

        expect(data).to.have.property('allVirtualMachines')
        expect(data).property('allVirtualMachines').to.be.an('array')

        expect(data.allVirtualMachines[0]).to.have.property('id')
        expect(data.allVirtualMachines[0]).to.have.property('name')
        expect(data.allVirtualMachines[0]).to.have.property('description')
        expect(data.allVirtualMachines[0]).to.have.property('status')
        expect(data.allVirtualMachines[0]).to.have.property('os')
        expect(data.allVirtualMachines[0]).to.have.property('ram')
        expect(data.allVirtualMachines[0]).to.have.property('memory')
        expect(data.allVirtualMachines[0]).to.have.property('template')
        expect(data.allVirtualMachines[0]).to.have.property('ips')
        expect(data.allVirtualMachines[0]).to.have.property('created')

        expect(data.allVirtualMachines.length).to.equal(7)
      })
  })

  it('POST - request to /api/vm', () => {
    cy.request('POST', 'https://tfg-iaas-vm.app.smartmock.io/api/vm', {
      virtualMachine: {
        name: 'FrontEND',
        description: 'Máquina de prueba de frontend',
        status: 'OFF',
        template: 'ubuntu-2004',
        os: 'linux',
        ram: '4 GiB',
        memory: '50 GiB',
        created: '2021/06/30'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(201)

        const data = JSON.parse(response.body.replace(/'/g, '"'))

        expect(data).to.have.property('method')
        expect(data).property('method').to.equal('POST')

        expect(data).to.have.property('description')
        expect(data).property('description').to.equal('create a new virtual machine')

        expect(data).to.have.property('response')
        expect(data).property('response').to.equal('item created')

        expect(data).to.have.property('virtualMachine')
        expect(data).property('virtualMachine').to.be.an('object')

        expect(data.virtualMachine).to.have.property('id')

        expect(data.virtualMachine).to.have.property('name')
        expect(data.virtualMachine).property('name').to.equal('FrontEND')

        expect(data.virtualMachine).to.have.property('description')
        expect(data.virtualMachine).property('description').to.equal('Máquina de prueba de frontend')

        expect(data.virtualMachine).to.have.property('status')
        expect(data.virtualMachine).property('status').to.equal('OFF')

        expect(data.virtualMachine).to.have.property('template')
        expect(data.virtualMachine).property('template').to.equal('ubuntu-2004')

        expect(data.virtualMachine).to.have.property('os')
        expect(data.virtualMachine).property('os').to.equal('linux')

        expect(data.virtualMachine).to.have.property('ram')
        expect(data.virtualMachine).property('ram').to.equal('4 GiB')

        expect(data.virtualMachine).to.have.property('memory')
        expect(data.virtualMachine).property('memory').to.equal('50 GiB')

        expect(data.virtualMachine).to.have.property('ips')
        expect(data.virtualMachine).property('ips').to.be.an('array')
        expect(data.virtualMachine.ips.length).to.equal(2)

        expect(data.virtualMachine).to.have.property('created')
        expect(data.virtualMachine).property('created').to.equal('2021/06/30')
      })
  })

  it('PUT - request to /api/vm/{vmName}', () => {
    cy.request('PUT', 'https://tfg-iaas-vm.app.smartmock.io/api/vm/FrontEND', {
      action: 'update item',
      virtualMachine: {
        id: '1234',
        name: 'FrontEND',
        description: 'Máquina de prueba de frontend',
        status: 'OFF',
        template: 'ubuntu-2004',
        os: 'linux',
        ram: '4 GiB',
        memory: '50 GiB',
        created: '2021/06/30'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200)

        const data = JSON.parse(response.body.replace(/'/g, '"'))

        expect(data).to.have.property('method')
        expect(data).property('method').to.equal('PUT')

        expect(data).to.have.property('description')
        expect(data).property('description').to.equal('actions on a virtual machine')

        expect(data).to.have.property('name')
        expect(data).property('name').to.equal('FrontEND')

        expect(data).to.have.property('response')
        expect(data).property('response').to.equal('action performed: update item')

        expect(data).to.have.property('virtualMachine')
        expect(data).property('virtualMachine').to.be.an('object')

        expect(data.virtualMachine).to.have.property('id')
        expect(data.virtualMachine).property('id').to.equal('1234')

        expect(data.virtualMachine).to.have.property('name')
        expect(data.virtualMachine).property('name').to.equal('FrontEND')

        expect(data.virtualMachine).to.have.property('description')
        expect(data.virtualMachine).property('description').to.equal('Máquina de prueba de frontend')

        expect(data.virtualMachine).to.have.property('status')
        expect(data.virtualMachine).property('status').to.equal('OFF')

        expect(data.virtualMachine).to.have.property('template')
        expect(data.virtualMachine).property('template').to.equal('ubuntu-2004')

        expect(data.virtualMachine).to.have.property('os')
        expect(data.virtualMachine).property('os').to.equal('linux')

        expect(data.virtualMachine).to.have.property('ram')
        expect(data.virtualMachine).property('ram').to.equal('4 GiB')

        expect(data.virtualMachine).to.have.property('memory')
        expect(data.virtualMachine).property('memory').to.equal('50 GiB')

        expect(data.virtualMachine).to.have.property('ips')
        expect(data.virtualMachine).property('ips').to.be.an('array')
        expect(data.virtualMachine.ips.length).to.equal(2)

        expect(data.virtualMachine).to.have.property('created')
        expect(data.virtualMachine).property('created').to.equal('2021/06/30')
      })
  })

  it('DELETE - request to /api/vm/{vmName}', () => {
    cy.request('DELETE', 'https://tfg-iaas-vm.app.smartmock.io/api/vm/SyTW-BackEND')
      .then((response) => {
        expect(response.status).to.eq(200)

        const data = JSON.parse(response.body.replace(/'/g, '"'))

        expect(data).to.have.property('method')
        expect(data).property('method').to.equal('DELETE')

        expect(data).to.have.property('description')
        expect(data).property('description').to.equal('delete a virtual machine')

        expect(data).to.have.property('name')
        expect(data).property('name').to.equal('SyTW-BackEND')

        expect(data).to.have.property('response')
        expect(data).property('response').to.equal('item SyTW-BackEND deleted')
      })
  })
})
