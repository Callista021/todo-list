$(document).ready(function () {
  $('#addTask').click(function () {
    let task = $('#taskInput').val().trim();
    let time = $('#taskTime').val();
    let note = $('#taskNote').val().trim();

    if (task === '') {
      alert('Please enter a task description.');
      return;
    }

    let taskHtml = `
      <li>
        <div class="task-header">
          <span class="task-desc">${task}</span>
          <span class="task-time">${time ? '🕒 ' + time : ''}</span>
        </div>
        ${note ? `<div class="task-note">📝 ${note}</div>` : ''}
        <div class="task-actions">
          <button class="completeBtn">Mark Done</button>
          <button class="removeBtn">Delete</button>
        </div>
      </li>
    `;

    $('#taskList').append(taskHtml);

    // Clear fields
    $('#taskInput').val('');
    $('#taskTime').val('');
    $('#taskNote').val('');
  });

  // Mark as done
  $(document).on('click', '.completeBtn', function () {
    $(this).closest('li').find('.task-desc').toggleClass('done');
  });

  // Delete task
  $(document).on('click', '.removeBtn', function () {
    $(this).closest('li').remove();
  });
});

