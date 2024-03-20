
'use client';

import { Button, Checkbox, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';

function FormComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="text-black ">ADD NEWPROJECT</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 ">Input Your Information</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="POSITION" />
              </div>
              <TextInput
                id="email"
                placeholder="UX-UI Design"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            {/* <!--Company input --> */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="company" value="COMPANY" />
              </div>
              <TextInput
                id="company"
                type="text" required
                placeholder="KSHRD"

              />
            </div>
            {/* <!-- Type input --> */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Type" />
              </div>      
              <Select 
               
              />
            
            </div>
            {/* Date input */}
            <div className="flex justify-around">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="date" value="START DATE" />
                </div>
                <TextInput
                  id="password"
                  type="date"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="date" value="END DATE" />
                </div>
                <TextInput
                  id="password"
                  type="date"
                  required
                />
              </div>
            </div>
            {/* <!-- DESCRIPTION --> */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="DESCRIPTION" />
              </div>
              <TextInput
                id="description"
                type="textarea"
                placeholder="Descipe what you do..."
                required
              />
            </div>
            {/* <!-- Submit Button--> */}
            <div className="w-full">
              <button className="btn bg-blue-400 text-white hover:bg-blue-500">
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default FormComponent
