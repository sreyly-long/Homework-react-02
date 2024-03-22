
'use client';

import { Label, Modal, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';

function FormComponent({ onAddCard }) {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  const handleSubmit = () => {
    const newCard = {
      position: email,
      company: '',
      type: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    onAddCard(newCard);
  };
  return (
    <>
      <button onClick={() => setOpenModal(true)} className=' bg-slate-400 p-3 rounded-[10px] text-black font-bold text-[15px] mr-12 hover:bg-slate-300'>ADD NEWPROJECT</button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 ">Input Your Information</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="position" value="POSITION" />
              </div>
                <Select id="countries" required>
                <option>Web Design</option>
                <option>Mobile Developer</option>
                <option>UX/UI Design</option>
              </Select>
            
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
              <Select id="countries" required>
                <option>Part time</option>
                <option>Full time</option>
                <option>Freelance</option>
              </Select>

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
              <button className="btn bg-blue-400 text-white hover:bg-blue-500" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default FormComponent;
