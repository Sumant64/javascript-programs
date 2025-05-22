import json

# Define the Q&A data entries
qa_entries = [
  {
    "messages": [
      {
        "role": 'system',
        "content":
          'You are a backend assistant that always returns structured JSON like { "index": "", "order": 1, "sectionName": "", "sectionOrder": "", "question": "", "answer": "", "videoLink": "", "showDepartment": "" }',
      },
      { "role": 'user', "content": 'What is the process for creating a new Pre-Booking?' },
      {
        "role": 'assistant',
        "content":
          '{ "index": "001", "order": 1, "sectionName": "PreBooking", "sectionOrder": "1", "question": "What is the process for creating a new Pre-Booking?", "answer": "Sales Team (DSE) Responsibilities:\\n• Go to PRE BOOKING card > Click Add New Booking.\\n• Fill in Customer Details, Vehicle Details, and Payment Received.\\n• Under Action > Documents, upload necessary documents (PAN, Aadhar, etc.).\\n• Click Action > Send for Pre-Booking Check to forward the booking to Customer Care for verification.", "videoLink": "", "showDepartment": "Sales" }',
      },
    ],
  },

  {
    "messages": [
      {
        "role": 'system',
        "content":
          'You are a backend assistant that always returns structured JSON like { "index": "", "order": 1, "sectionName": "", "sectionOrder": "", "question": "", "answer": "", "videoLink": "", "showDepartment": "" }',
      },
      { "role": 'user', "content": 'What happens after the Sales team submits a Pre-Booking?' },
      {
        "role": 'assistant',
        "content":
          '{ "index": "002", "order": 2, "sectionName": "PreBooking", "sectionOrder": "2", "question": "What happens after the Sales team submits a Pre-Booking?", "answer": "• The booking is sent to the Customer Care team for verification.\\n• Customer Care checks all details (customer info, vehicle, payment, and documents).\\n• If correct, they Action > Send for DMS Entry, forwarding it to the EDP team.", "videoLink": "", "showDepartment": "Customer Care" }',
      },
    ],
  },

  {
    "messages": [
      {
        "role": 'system',
        "content":
          'You are a backend assistant that always returns structured JSON like { "index": "", "order": 1, "sectionName": "", "sectionOrder": "", "question": "", "answer": "", "videoLink": "", "showDepartment": "" }',
      },
      { "role": 'user', "content": 'What does the EDP team do in this process?' },
      {
        "role": 'assistant',
        "content":
          '{ "index": "003", "order": 3, "sectionName": "PreBooking", "sectionOrder": "3", "question": "What does the EDP team do in this process?", "answer": "• EDP logs in, selects the booking, and clicks Action > Edit Info.\\n• They enter the CIN (Customer Identification Number) and Order Number.\\n• Finally, they click Action > Mark as DMS Entry Done, changing the booking stage to Pending Booking.", "videoLink": "", "showDepartment": "EDP" }',
      },
    ],
  },

  {
    "messages": [
      {
        "role": 'system',
        "content":
          'You are a backend assistant that always returns structured JSON like { "index": "", "order": 1, "sectionName": "", "sectionOrder": "", "question": "", "answer": "", "videoLink": "", "showDepartment": "" }',
      },
      { "role": 'user', "content": 'What documents are required for Pre-Booking?' },
      {
        "role": 'assistant',
        "content":
          '{ "index": "004", "order": 4, "sectionName": "PreBooking", "sectionOrder": "4", "question": "What documents are required for Pre-Booking?", "answer": "• PAN Card\\n• Aadhar Card\\n• Payment Receipt (if any advance is paid)\\n• Any other KYC documents as per company policy", "videoLink": "", "showDepartment": "Sales" }',
      },
    ],
  },

  {
    "messages": [
      {
        "role": 'system',
        "content":
          'You are a backend assistant that always returns structured JSON like { "index": "", "order": 1, "sectionName": "", "sectionOrder": "", "question": "", "answer": "", "videoLink": "", "showDepartment": "" }',
      },
      { "role": 'user', "content": 'What if Customer Care finds incorrect details?' },
      {
        "role": 'assistant',
        "content":
          '{ "index": "005", "order": 5, "sectionName": "PreBooking", "sectionOrder": "5", "question": "What if Customer Care finds incorrect details?", "answer": "• They should reject the booking with remarks and send it back to the Sales (DSE) for correction.\\n• The Sales team must update the details and resend it for verification.", "videoLink": "", "showDepartment": "Customer Care" }',
      },
    ],
  },

  {
    "messages": [
      {
        "role": 'system',
        "content":
          'You are a backend assistant that always returns structured JSON like { "index": "", "order": 1, "sectionName": "", "sectionOrder": "", "question": "", "answer": "", "videoLink": "", "showDepartment": "" }',
      },
      { "role": 'user', "content": 'How is the CIN generated?' },
      {
        "role": 'assistant',
        "content":
          '{ "index": "006", "order": 6, "sectionName": "PreBooking", "sectionOrder": "6", "question": "How is the CIN generated?", "answer": "• The EDP team assigns the Customer Identification Number (CIN) during DMS entry.", "videoLink": "", "showDepartment": "EDP" }',
      },
    ],
  },

  
];


# Write to a .jsonl file
file_path = "pre_booking_training_data.jsonl"

with open(file_path, 'w') as f:
    for entry in qa_entries:
        f.write(json.dumps(entry) + '\n')

print(f"File saved at {file_path}")
