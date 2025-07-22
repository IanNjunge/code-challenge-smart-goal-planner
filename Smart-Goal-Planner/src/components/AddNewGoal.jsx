import { useState } from "react";

function AddGoalForm({ onGoalAdded }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

}

const handleSubmit = (e) => {
    e.preventDefault();

    
}